// Purpose: bSDD API orchestration — pagination, caching, code enrichment, validate/upload
// Wraps a BsddApiClient transport; uses the generated hey-api SDK for all HTTP calls.

import type {
  BsddDictionary,
  BsddSearchResponse,
  BsddClassListItem,
  BsddDictionaryClassesResponse,
  BsddClassProperty,
  BsddClassRelation,
  BsddClassDetails,
  BsddValidationResult,
  BsddApiError,
} from './types'
import { BsddApiClient, bsddTransport } from './BsddApiClient'
import { extractCodeFromStandardUri } from './helpers'
import {
  classGet,
  dictionaryGet,
  dictionaryClassesGetWithClasses,
  searchInDictionaryGet,
} from './generated/sdk.gen'
import type {
  ClassContractV1,
  ClassPropertyContractV1,
  ClassRelationContractV1,
  ClassListItemContractV1Classes,
  ClassSearchResultContractV1,
  DictionaryClassesResponseContractV1Classes,
  SearchInDictionaryResponseContractV1,
} from './generated/types.gen'

// ── Mapper functions ──────────────────────────────────────────────────────────
// Map generated nullable types → the narrower hand-written types that app code
// relies on.  Nulls are coerced to undefined or empty strings where required
// fields must always be present.

function mapClassProperty(p: ClassPropertyContractV1): BsddClassProperty {
  return {
    uri: p.uri ?? '',
    propertyUri: p.propertyUri ?? '',
    propertyCode: p.propertyCode ?? '',
    name: p.name,
    definition: p.definition ?? undefined,
    description: p.description ?? undefined,
    dataType: p.dataType ?? undefined,
    propertySet: p.propertySet ?? undefined,
    isRequired: p.isRequired ?? undefined,
    isWritable: p.isWritable ?? undefined,
    propertyDictionaryUri: p.propertyDictionaryUri ?? undefined,
    propertyDictionaryName: p.propertyDictionaryName ?? undefined,
    predefinedValue: p.predefinedValue ?? undefined,
    example: p.example ?? undefined,
    pattern: p.pattern ?? undefined,
    minInclusive: p.minInclusive ?? undefined,
    maxInclusive: p.maxInclusive ?? undefined,
    minExclusive: p.minExclusive ?? undefined,
    maxExclusive: p.maxExclusive ?? undefined,
    physicalQuantity: p.physicalQuantity ?? undefined,
    dimension: p.dimension ?? undefined,
    units: p.units ?? undefined,
    allowedValues: p.allowedValues ?? undefined,
  }
}

function mapClassRelation(r: ClassRelationContractV1): BsddClassRelation {
  return {
    relationType: r.relationType as BsddClassRelation['relationType'],
    relatedClassUri: r.relatedClassUri,
    relatedClassName: r.relatedClassName ?? undefined,
  }
}

export function mapClassDetails(c: ClassContractV1): BsddClassDetails {
  return {
    uri: c.uri,
    code: c.code,
    name: c.name,
    definition: c.definition ?? undefined,
    description: c.description ?? undefined,
    classType: c.classType ?? undefined,
    referenceCode: c.referenceCode ?? undefined,
    status: c.status,
    dictionaryUri: c.dictionaryUri ?? undefined,
    relatedIfcEntityNames: c.relatedIfcEntityNames ?? undefined,
    synonyms: c.synonyms ?? undefined,
    classProperties: c.classProperties != null
      ? c.classProperties.map(mapClassProperty)
      : undefined,
    classRelations: c.classRelations != null
      ? c.classRelations.map(mapClassRelation)
      : undefined,
    parentClassReference: c.parentClassReference != null
      ? {
        uri: c.parentClassReference.uri,
        code: c.parentClassReference.code ?? '',
        name: c.parentClassReference.name ?? '',
      }
      : undefined,
    childClassReferences: c.childClassReferences != null
      ? c.childClassReferences.map((ref) => ({
        uri: ref.uri,
        code: ref.code ?? '',
        name: ref.name ?? '',
      }))
      : undefined,
  }
}

function mapClassListItem(c: ClassListItemContractV1Classes): BsddClassListItem | null {
  if (!c.uri || !c.name) return null
  return {
    uri: c.uri,
    code: c.code ?? undefined,
    name: c.name,
    classType: c.classType ?? undefined,
    referenceCode: c.referenceCode ?? undefined,
    parentClassCode: c.parentClassCode ?? undefined,
    descriptionPart: c.descriptionPart ?? undefined,
    children: c.children != null
      ? c.children.map(mapClassListItem).filter((x): x is BsddClassListItem => x !== null)
      : undefined,
  }
}

function mapClassSearchResult(c: ClassSearchResultContractV1): BsddClassListItem | null {
  if (!c.uri || !c.name) return null
  return {
    uri: c.uri,
    code: extractCodeFromStandardUri(c.uri) ?? undefined,
    name: c.name,
    classType: c.classType ?? undefined,
    referenceCode: c.referenceCode ?? undefined,
  }
}

function mapDictionaryClassesResponse(
  r: DictionaryClassesResponseContractV1Classes,
): BsddDictionaryClassesResponse {
  return {
    dictionaryUri: r.uri,
    dictionaryName: r.name,
    classes: (r.classes ?? [])
      .map(mapClassListItem)
      .filter((x): x is BsddClassListItem => x !== null),
    classesTotalCount: r.classesTotalCount ?? 0,
  }
}

function mapSearchInDictionaryResponse(
  r: SearchInDictionaryResponseContractV1,
  fallbackDictionaryUri: string,
): BsddDictionaryClassesResponse {
  return {
    dictionaryUri: r.dictionary?.uri ?? fallbackDictionaryUri,
    dictionaryName: r.dictionary?.name ?? undefined,
    classes: (r.dictionary?.classes ?? [])
      .map(mapClassSearchResult)
      .filter((x): x is BsddClassListItem => x !== null),
    classesTotalCount: r.totalCount ?? 0,
  }
}

// ── BsddApiWrapper ────────────────────────────────────────────────────────────

export class BsddApiWrapper {
  private readonly transport: BsddApiClient

  // Dictionary cache
  private allDictionaries: BsddDictionary[] | null = null
  private loadPromise: Promise<BsddSearchResponse> | null = null
  private lastIncludeTest = false

  // Code caches
  private codeCache: Map<string, string> = new Map()
  private dictionaryClassCodesCache: Map<string, Map<string, string>> = new Map()

  constructor(transport: BsddApiClient) {
    this.transport = transport
  }

  /**
   * Delegates to the transport so consumers can pass `bsddApi.fetch` as a drop-in
   * global-`fetch` replacement (used by the hey-api SDK wiring in openapi-runtime.ts).
   */
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    return this.transport.fetch(input, init)
  }

  /** Pass-through to the transport's rate-limit stats. */
  getRateLimitStats() {
    return this.transport.getRateLimitStats()
  }

  // ── Internal helpers ──────────────────────────────────────────────────────

  private buildHeaders(accessToken?: string): Record<string, string> {
    const headers: Record<string, string> = {}
    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`
    return headers
  }

  // ── Dictionary endpoints ──────────────────────────────────────────────────

  /**
   * Get all dictionaries (cached, handles pagination)
   */
  async getAllDictionaries(options?: {
    accessToken?: string
    includeTestDictionaries?: boolean
  }): Promise<BsddSearchResponse> {
    const includeTest = options?.includeTestDictionaries ?? false

    if (this.allDictionaries && this.lastIncludeTest === includeTest) {
      return { dictionaries: this.allDictionaries, totalCount: this.allDictionaries.length }
    }
    if (this.loadPromise && this.lastIncludeTest === includeTest) {
      return this.loadPromise
    }

    this.lastIncludeTest = includeTest
    this.loadPromise = this._fetchAllDictionaries(options?.accessToken, includeTest)
      .catch((err) => {
        // Clear on failure so the next call retries instead of returning the same rejected promise.
        this.loadPromise = null
        this.allDictionaries = null
        throw err
      })
    return this.loadPromise
  }

  private async _fetchAllDictionaries(
    accessToken?: string,
    includeTestDictionaries = false,
  ): Promise<BsddSearchResponse> {
    const allDictionaries: BsddDictionary[] = []
    let offset = 0
    const limit = 100
    let hasMore = true

    while (hasMore) {
      const response = await dictionaryGet({
        query: { Offset: offset, Limit: limit, IncludeTestDictionaries: includeTestDictionaries },
        headers: this.buildHeaders(accessToken),
        throwOnError: true,
      })

      const dictionaries = response.data.dictionaries ?? []
      allDictionaries.push(...dictionaries)

      const totalCount = response.data.totalCount ?? 0
      hasMore = offset + limit < totalCount
      offset += limit
    }

    this.allDictionaries = allDictionaries
    return { dictionaries: allDictionaries, totalCount: allDictionaries.length }
  }

  /**
   * Get a single dictionary by its URI. Uses the in-memory allDictionaries
   * cache (triggering a full fetch the first time). Returns undefined if not
   * found.
   */
  async getDictionaryByUri(
    uri: string,
    accessToken?: string,
  ): Promise<BsddDictionary | undefined> {
    const { dictionaries } = await this.getAllDictionaries({ accessToken })
    return dictionaries.find((d) => d.uri === uri)
  }

  /**
   * Search dictionaries by name, code, or organization (client-side filtering)
   */
  async searchDictionaries(
    searchText: string,
    limit = 10,
    accessToken?: string,
  ): Promise<BsddSearchResponse> {
    const response = await this.getAllDictionaries({ accessToken })
    const searchLower = searchText.toLowerCase()
    const filtered = response.dictionaries.filter(
      (dict) =>
        dict.name?.toLowerCase().includes(searchLower) ||
        dict.code?.toLowerCase().includes(searchLower) ||
        dict.organizationNameOwner?.toLowerCase().includes(searchLower),
    )
    return { dictionaries: filtered.slice(0, limit), totalCount: filtered.length }
  }

  /**
   * Get dictionaries with pagination (single page)
   */
  async getDictionaries(offset = 0, limit = 10, accessToken?: string) {
    const response = await dictionaryGet({
      query: { Offset: offset, Limit: limit },
      headers: this.buildHeaders(accessToken),
      throwOnError: true,
    })
    return response.data
  }

  // ── Class endpoints ───────────────────────────────────────────────────────

  /**
   * Get classes from a dictionary (single page)
   */
  async getDictionaryClasses(
    dictionaryUri: string,
    options: {
      offset?: number
      limit?: number
      searchText?: string
      classType?: string
      accessToken?: string
    } = {},
  ): Promise<BsddDictionaryClassesResponse> {
    const { offset = 0, limit = 100, searchText, classType, accessToken } = options

    const response = await dictionaryClassesGetWithClasses({
      query: {
        Uri: dictionaryUri,
        Offset: offset,
        Limit: limit,
        SearchText: searchText,
        ClassType: classType,
      },
      headers: this.buildHeaders(accessToken),
      throwOnError: true,
    })
    return mapDictionaryClassesResponse(response.data)
  }

  /**
   * Get all classes from a dictionary (handles pagination)
   */
  async getAllDictionaryClasses(
    dictionaryUri: string,
    options: {
      searchText?: string
      classType?: string
      accessToken?: string
      onProgress?: (loaded: number, total: number) => void
    } = {},
  ): Promise<BsddDictionaryClassesResponse> {
    const { searchText, classType, accessToken, onProgress } = options
    const allClasses: BsddClassListItem[] = []
    let offset = 0
    const limit = 500
    let hasMore = true
    let totalCount = 0
    let dictionaryName: string | undefined

    while (hasMore) {
      const response = await this.getDictionaryClasses(dictionaryUri, {
        offset,
        limit,
        searchText,
        classType,
        accessToken,
      })

      const classes = response.classes ?? []
      totalCount = response.classesTotalCount ?? 0
      dictionaryName = response.dictionaryName
      allClasses.push(...classes)

      if (onProgress) onProgress(allClasses.length, totalCount)

      hasMore = offset + limit < totalCount
      offset += limit
    }

    return { classes: allClasses, classesTotalCount: totalCount, dictionaryUri, dictionaryName }
  }

  /**
   * Get detailed information for a single class (includes properties and relations)
   */
  async getClassDetails(classUri: string, accessToken?: string): Promise<BsddClassDetails> {
    const response = await classGet({
      query: {
        Uri: classUri,
        IncludeClassProperties: true,
        IncludeClassRelations: true,
      },
      headers: this.buildHeaders(accessToken),
      throwOnError: true,
    })
    return mapClassDetails(response.data)
  }

  /**
   * Get details for multiple classes (with rate limiting and progress)
   */
  async getMultipleClassDetails(
    classUris: string[],
    options: {
      accessToken?: string
      onProgress?: (loaded: number, total: number) => void
    } = {},
  ): Promise<BsddClassDetails[]> {
    const { accessToken, onProgress } = options
    const results: BsddClassDetails[] = []

    for (let i = 0; i < classUris.length; i++) {
      results.push(await this.getClassDetails(classUris[i], accessToken))
      if (onProgress) onProgress(i + 1, classUris.length)
    }

    return results
  }

  /**
   * Full-text search of classes within a dictionary (single page).
   * Hits the bSDD `/api/SearchInDictionary/v1` endpoint, which does
   * case- and accent-insensitive substring matching — unlike the
   * `SearchText` filter on `getDictionaryClasses`, which only matches
   * by leading prefix. Returns the same response shape as
   * `getDictionaryClasses` so callers can use either interchangeably.
   */
  async searchClassesInDictionary(
    dictionaryUri: string,
    options: {
      searchText: string
      offset?: number
      limit?: number
      accessToken?: string
    },
  ): Promise<BsddDictionaryClassesResponse> {
    const { searchText, offset = 0, limit = 100, accessToken } = options

    const response = await searchInDictionaryGet({
      query: {
        DictionaryUri: dictionaryUri,
        SearchText: searchText,
        Offset: offset,
        Limit: limit,
      },
      headers: this.buildHeaders(accessToken),
      throwOnError: true,
    })
    return mapSearchInDictionaryResponse(response.data, dictionaryUri)
  }

  // ── Code enrichment (IDS generation) ─────────────────────────────────────

  /**
   * Lookup code for a class URI.
   * 1. Check in-memory cache.
   * 2. Check pre-loaded dictionary cache.
   * 3. Parse code from standard buildingSMART URI (no API call).
   * 4. Fetch class details for ownedUri (one API call, then cached).
   */
  async lookupCode(classUri: string, accessToken?: string): Promise<string | null> {
    try {
      if (this.codeCache.has(classUri)) return this.codeCache.get(classUri)!

      for (const classMap of this.dictionaryClassCodesCache.values()) {
        const code = classMap.get(classUri)
        if (code) {
          this.codeCache.set(classUri, code)
          return code
        }
      }

      const parsedCode = extractCodeFromStandardUri(classUri)
      if (parsedCode) {
        this.codeCache.set(classUri, parsedCode)
        return parsedCode
      }

      const classDetails = await this.getClassDetails(classUri, accessToken)
      const code = classDetails.code || null
      if (code) this.codeCache.set(classUri, code)
      return code
    } catch (error) {
      console.warn(`Failed to lookup code for ${classUri}:`, error)
      return null
    }
  }

  /**
   * Pre-load all classes from a dictionary into the code cache.
   * Useful for bulk IDS generation where many classes from the same dictionary are needed.
   */
  async preloadDictionary(dictionaryUri: string, accessToken?: string): Promise<void> {
    if (this.dictionaryClassCodesCache.has(dictionaryUri)) return

    const classMap = new Map<string, string>()
    try {
      const response = await this.getAllDictionaryClasses(dictionaryUri, { accessToken })
      for (const cls of response.classes) {
        if (cls.uri && cls.code) classMap.set(cls.uri, cls.code)
      }
      this.dictionaryClassCodesCache.set(dictionaryUri, classMap)
    } catch (error) {
      console.warn(`Failed to preload dictionary ${dictionaryUri}:`, error)
      this.dictionaryClassCodesCache.set(dictionaryUri, classMap)
    }
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): {
    cachedCodes: number
    preloadedDictionaries: number
    totalPreloadedClasses: number
  } {
    let totalPreloadedClasses = 0
    for (const classMap of this.dictionaryClassCodesCache.values()) {
      totalPreloadedClasses += classMap.size
    }
    return {
      cachedCodes: this.codeCache.size,
      preloadedDictionaries: this.dictionaryClassCodesCache.size,
      totalPreloadedClasses,
    }
  }

  /**
   * Clear all caches (dictionaries, codes, pre-loaded classes)
   */
  clearCache(): void {
    this.codeCache.clear()
    this.dictionaryClassCodesCache.clear()
    this.allDictionaries = null
    this.loadPromise = null
  }

  // ── Validation and upload ─────────────────────────────────────────────────

  /**
   * Validate a bSDD dictionary JSON file via the buildingSMART API.
   * Always uses the production endpoint (validation is only available there).
   */
  async validateDictionary(
    dictionaryJson: object | string,
    organizationCode: string,
    options: { accessToken?: string; isTest?: boolean } = {},
  ): Promise<BsddValidationResult> {
    const { accessToken, isTest = false } = options

    if (!organizationCode || organizationCode.trim() === '') {
      throw new Error('Organization code is required for validation')
    }

    const jsonString =
      typeof dictionaryJson === 'string' ? dictionaryJson : JSON.stringify(dictionaryJson)

    // Validation always targets production (not staging/test instances)
    const url = new URL('/api/UploadImportFile/v2', 'https://api.bsdd.buildingsmart.org')

    let timeoutId: ReturnType<typeof setTimeout> | undefined
    let response: Response
    try {
      response = await this.transport.submitRequest(() => {
        const formData = new FormData()
        formData.append('OrganizationCode', organizationCode)
        formData.append(
          'FormFile',
          new Blob([jsonString], { type: 'application/json' }),
          'dictionary.json',
        )
        formData.append('ValidateOnly', 'true')
        if (isTest) formData.append('IsTest', 'true')

        const headers: Record<string, string> = {
          'X-User-Agent': this.transport.getUserAgent(),
        }
        if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`

        // Fresh AbortController per attempt so a timeout from a prior retry
        // doesn't abort the next one.
        if (timeoutId) clearTimeout(timeoutId)
        const controller = new AbortController()
        timeoutId = setTimeout(() => controller.abort(), 60_000)

        return {
          url: url.toString(),
          init: { method: 'POST', headers, body: formData, signal: controller.signal },
        }
      })
    } catch (error) {
      if (timeoutId) clearTimeout(timeoutId)
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Validation request timed out. Please try again.')
        }
        if (
          error.message.includes('Failed to fetch') ||
          error.message.includes('NetworkError')
        ) {
          throw new Error('Network error. Please check your internet connection.')
        }
      }
      throw error
    }

    if (timeoutId) clearTimeout(timeoutId)

    if (!response.ok) {
      let errorText = ''
      try {
        const ct = response.headers.get('content-type')
        errorText = ct?.includes('application/json')
          ? JSON.stringify(await response.json())
          : await response.text()
      } catch {
        errorText = 'Unable to parse error response'
      }

      let userMessage = errorText
      if (response.status === 401) {
        userMessage = 'Authentication failed. Please log out and log in again.'
      } else if (response.status === 403) {
        userMessage = `Access denied. Your account may not have upload permissions for organization "${organizationCode}".`
      } else if (response.status === 429) {
        userMessage = 'Rate limit exceeded. Please wait and try again.'
      } else if (response.status >= 500) {
        userMessage = 'bSDD server error. Please try again later.'
      }

      const error: BsddApiError = new Error(
        `bSDD validation error (${response.status}): ${userMessage}`,
      )
      error.status = response.status
      error.response = errorText
      throw error
    }

    const result = (await response.json()) as BsddValidationResult
    const hasValidIsOk = typeof result.isOk === 'boolean' || result.isOk === null
    if (!hasValidIsOk) {
      throw new Error('Invalid response structure from bSDD API')
    }
    return result
  }

  /**
   * Upload a bSDD dictionary JSON file to buildingSMART.
   */
  async uploadDictionary(
    dictionaryJson: object | string,
    organizationCode: string,
    options: { accessToken?: string; isTest?: boolean } = {},
  ): Promise<BsddValidationResult> {
    const { accessToken, isTest = false } = options
    const jsonString =
      typeof dictionaryJson === 'string' ? dictionaryJson : JSON.stringify(dictionaryJson)

    const url = new URL('/api/UploadImportFile/v2', this.transport.baseURL)

    const response = await this.transport.submitRequest(() => {
      const formData = new FormData()
      formData.append('OrganizationCode', organizationCode)
      formData.append(
        'FormFile',
        new Blob([jsonString], { type: 'application/json' }),
        'dictionary.json',
      )
      formData.append('ValidateOnly', 'false')
      if (isTest) formData.append('IsTest', 'true')

      const headers: Record<string, string> = {
        'X-User-Agent': this.transport.getUserAgent(),
      }
      if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`

      return { url: url.toString(), init: { method: 'POST', headers, body: formData } }
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(
        `bSDD upload error: ${response.status} ${response.statusText} - ${errorText}`,
      )
    }

    return (await response.json()) as BsddValidationResult
  }
}

export const bsddApi = new BsddApiWrapper(bsddTransport)
