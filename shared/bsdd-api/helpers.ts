// Purpose: Helper functions for bSDD API data transformations
import type { BsddClassDetails, AggregatedProperty, BsddClassProperty } from './types'

/**
 * Create a classification URI from its components
 * @example buildClassificationUri('buildingsmart', 'ifc', '4.3', 'IfcWall')
 * // Returns: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcWall'
 */
export function buildClassificationUri(
  orgCode: string,
  dictCode: string,
  version: string,
  classCode: string
): string {
  return `https://identifier.buildingsmart.org/uri/${orgCode}/${dictCode}/${version}/class/${classCode}`
}

/**
 * Parse a bSDD URI to extract its components
 * @example parseBsddUri('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcWall')
 */
export function parseBsddUri(uri: string): {
  orgCode: string
  dictCode: string
  version: string
  type: 'class' | 'prop' | 'unknown'
  code: string
} | null {
  const pattern = /https:\/\/identifier\.buildingsmart\.org\/uri\/([^/]+)\/([^/]+)\/([^/]+)\/(class|prop)\/(.+)/
  const match = uri.match(pattern)
  if (!match) return null

  return {
    orgCode: match[1],
    dictCode: match[2],
    version: match[3],
    type: match[4] === 'prop' ? 'prop' : 'class',
    code: match[5],
  }
}

/**
 * Detect if a class URI follows the standard buildingSMART pattern
 * 
 * Standard pattern: https://identifier.buildingsmart.org/uri/{org}/{dict}/{version}/class/{code}
 * The code is parseable directly from the URL path, no API call needed.
 * 
 * Non-standard (ownedUri) patterns use UUIDs and require API lookup:
 * - https://data.ketenstandaard.nl/publications/nlsfb/2021/{uuid}
 * - https://digitalbuildingdata.tech/ils-ontwerp-en-engineering-taskforce/0.9.0/{uuid}
 * 
 * @param classUri - The class URI to check
 * @returns true if standard buildingSMART URI, false if ownedUri
 * 
 * @example
 * isStandardBsddUri('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcWall')
 * // Returns: true (standard - code parseable from URL)
 * 
 * @example
 * isStandardBsddUri('https://data.ketenstandaard.nl/publications/nlsfb/2021/7b2e5135-ca22-4a11-914e-519b41467a67')
 * // Returns: false (ownedUri - requires API call)
 */
export function isStandardBsddUri(classUri: string): boolean {
  return classUri.includes('identifier.buildingsmart.org/uri/') && classUri.includes('/class/');
}

/**
 * Extract code directly from standard buildingSMART class URI
 * Returns null for non-standard URIs (ownedUri)
 * 
 * This enables zero-cost code lookups for standard URIs without API calls.
 * 
 * @param classUri - The class URI to parse
 * @returns The extracted code, or null if not a standard URI
 * 
 * @example
 * extractCodeFromStandardUri('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcWall')
 * // Returns: 'IfcWall'
 * 
 * @example
 * extractCodeFromStandardUri('https://identifier.buildingsmart.org/uri/nlsfb/nlsfb2005/2.2/class/22.11')
 * // Returns: '22.11'
 * 
 * @example
 * extractCodeFromStandardUri('https://data.ketenstandaard.nl/publications/nlsfb/2021/uuid-here')
 * // Returns: null (not a standard URI)
 */
export function extractCodeFromStandardUri(classUri: string): string | null {
  if (!isStandardBsddUri(classUri)) {
    return null;
  }
  
  const match = classUri.match(/\/class\/(.+)$/);
  return match ? match[1] : null;
}

/**
 * Get dictionary URI from a class URI
 * Supports both standard buildingSMART URIs and custom dictionary URIs
 * 
 * @example getDictionaryUriFromClass('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/class/IfcWall')
 * // Returns: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3'
 * 
 * @example getDictionaryUriFromClass('https://data.ketenstandaard.nl/publications/nlsfb/2021/7b2e5135-ca22-4a11-914e-519b41467a67')
 * // Returns: 'https://data.ketenstandaard.nl/publications/nlsfb/2021'
 */
export function getDictionaryUriFromClass(classUri: string): string | null {
  // Try standard buildingSMART pattern first
  const standardPattern = /(https:\/\/identifier\.buildingsmart\.org\/uri\/[^/]+\/[^/]+\/[^/]+)\/class\/.+/
  const standardMatch = classUri.match(standardPattern)
  if (standardMatch) {
    return standardMatch[1]
  }

  // For non-standard URIs, try to extract dictionary URI by removing the last path segment
  // This handles UUID-based URIs like:
  // - https://data.ketenstandaard.nl/publications/nlsfb/2021/{uuid}
  // - https://digitalbuildingdata.tech/ils-ontwerp-en-engineering-taskforce/0.9.0/{uuid}
  try {
    const url = new URL(classUri)
    const pathSegments = url.pathname.split('/').filter(Boolean)
    
    if (pathSegments.length === 0) {
      return null
    }

    const lastSegment = pathSegments[pathSegments.length - 1]
    
    // Check if last segment looks like a UUID (8-4-4-4-12 hex pattern)
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    
    if (uuidPattern.test(lastSegment)) {
      // Remove UUID and reconstruct dictionary URI
      pathSegments.pop()
      return `${url.protocol}//${url.host}/${pathSegments.join('/')}`
    }

    // If no UUID pattern found, we can't determine the dictionary URI
    // Fall back to returning null (the caller will handle this gracefully)
    return null
  } catch (error) {
    // Invalid URL
    return null
  }
}

/**
 * Get URIs of parent classifications from class relations
 * Useful for filtering properties based on class hierarchy
 */
export function getParentClassificationUris(classDetails: BsddClassDetails | null): string[] {
  if (!classDetails) return []

  const parentUri = classDetails.parentClassReference?.uri
  return parentUri ? [parentUri] : []
}

/**
 * Get URIs of related IFC entities for a class
 * Useful for IDS applicability mapping
 */
export function getRelatedIfcEntityUris(
  classDetails: BsddClassDetails | null,
  ifcDictionaryUri: string | null
): string[] {
  if (!classDetails || !ifcDictionaryUri) return []

  const entityNames = classDetails.relatedIfcEntityNames || []
  return entityNames.map((name) => `${ifcDictionaryUri}/class/${name}`)
}

/**
 * Aggregate properties from multiple classes
 * Groups properties by URI and tracks which classes have each property
 */
export function aggregateClassProperties(classes: BsddClassDetails[]): AggregatedProperty[] {
  const propertyMap = new Map<string, AggregatedProperty>()

  for (const cls of classes) {
    const properties = cls.classProperties || []

    for (const prop of properties) {
      const existing = propertyMap.get(prop.propertyUri)

      if (existing) {
        existing.classCount += 1
        existing.classUris.push(cls.uri)
      } else {
        propertyMap.set(prop.propertyUri, {
          propertyUri: prop.propertyUri,
          propertyCode: prop.propertyCode,
          name: prop.name,
          definition: prop.definition,
          dataType: prop.dataType,
          propertySet: prop.propertySet,
          propertyDictionaryName: prop.propertyDictionaryName,
          classCount: 1,
          classUris: [cls.uri],
        })
      }
    }
  }

  return Array.from(propertyMap.values()).sort((a, b) => {
    // Sort by class count (most common first), then by name
    if (b.classCount !== a.classCount) {
      return b.classCount - a.classCount
    }
    const aName = String(a.name || '')
    const bName = String(b.name || '')
    return aName.localeCompare(bName)
  })
}

/**
 * Filter properties by property set name (e.g., 'Pset_' for IFC property sets)
 */
export function filterPropertiesByPropertySet(
  properties: BsddClassProperty[],
  propertySetPrefix: string
): BsddClassProperty[] {
  return properties.filter((prop) =>
    prop.propertySet?.startsWith(propertySetPrefix)
  )
}

/**
 * Get unique property sets from a list of properties
 */
export function getUniquePropertySets(properties: BsddClassProperty[]): string[] {
  const sets = new Set<string>()
  for (const prop of properties) {
    if (prop.propertySet) {
      sets.add(prop.propertySet)
    }
  }
  return Array.from(sets).sort()
}

/**
 * Map a bSDD class to IDS classification format
 */
export function mapClassToIdsClassification(classDetails: BsddClassDetails): {
  system: string | undefined
  value: string
  uri: string
} {
  return {
    system: classDetails.dictionaryUri,
    value: classDetails.code,
    uri: classDetails.uri,
  }
}

/**
 * Check if a class is an IFC entity type
 */
export function isIfcEntityClass(classDetails: BsddClassDetails): boolean {
  const ifcPattern = /\/buildingsmart\/ifc\//i
  return ifcPattern.test(classDetails.uri) && classDetails.classType === 'Class'
}

/**
 * Delay helper for rate limiting
 */
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))
