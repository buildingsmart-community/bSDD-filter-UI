// Purpose: bSDD API type definitions
// BsddDictionary and BsddPropertyValue are re-exported from generated/types.gen.ts.
// All other types are kept hand-written: the OpenAPI-generated equivalents use
// `string | null` for fields that app code treats as required strings, which would
// propagate null through helpers and lib consumers. These hand-written types document
// the narrower slice of the spec our code actually relies on.

// ── Generated re-exports ──────────────────────────────────────────────────────
// Imported locally so they are in scope for the hand-written interfaces below,
// then re-exported under the stable Bsdd* names.
import type { DictionaryContractV1, ClassPropertyValueContractV1 } from './generated/types.gen'

// BsddDictionary: mirrors DictionaryContractV1 from the spec.
// availableLanguages changes from string[] to Array<CodeNameDto> but is unused
// by app code, so this alias is safe.
export type BsddDictionary = DictionaryContractV1

export interface BsddSearchResponse {
  dictionaries: BsddDictionary[];
  totalCount: number;
}

export interface BsddClassListItem {
  uri: string;
  // Optional: the regular dictionary-classes endpoint usually populates this,
  // but the SearchInDictionary endpoint does not return it. Display sites
  // already render `{cls.code}` which collapses to empty when undefined.
  code?: string;
  name: string;
  classType?: string;
  referenceCode?: string;
  parentClassCode?: string;
  descriptionPart?: string;
  children?: BsddClassListItem[];
}

export interface BsddDictionaryClassesResponse {
  dictionaryUri: string;
  dictionaryName?: string;
  classes: BsddClassListItem[];
  classesTotalCount: number;
}

export interface BsddClassProperty {
  uri: string;
  propertyUri: string;
  propertyCode: string;
  name: string;
  definition?: string;
  description?: string;
  dataType?: string;
  propertySet?: string;
  isRequired?: boolean;
  isWritable?: boolean;
  propertyDictionaryUri?: string;
  propertyDictionaryName?: string;
  predefinedValue?: string;
  example?: string;
  pattern?: string;
  minInclusive?: number;
  maxInclusive?: number;
  minExclusive?: number;
  maxExclusive?: number;
  physicalQuantity?: string;
  dimension?: string;
  units?: string[];
  allowedValues?: BsddPropertyValue[];
}

// BsddPropertyValue: mirrors ClassPropertyValueContractV1 from the spec.
// sortNumber changes from number|undefined to number|null|undefined — no consumer
// accesses that field, so the alias is safe.
export type BsddPropertyValue = ClassPropertyValueContractV1

// ── Hand-written types ────────────────────────────────────────────────────────
// The generated equivalents exist but use string|null for fields that our helpers
// and lib consumers rely on as required strings.  We keep the narrower shapes here
// until Step 4 / Step 7 migrate each endpoint to the generated SDK path, at which
// point null-handling can be added incrementally per endpoint.

export interface BsddClassRelation {
  relationType: 'HasMaterial' | 'HasReference' | 'IsEqualTo' | 'IsSimilarTo' | 'IsParentOf' | 'IsChildOf' | 'HasPart' | 'IsPartOf';
  relatedClassUri: string;
  relatedClassName?: string;
}

/**
 * Relation types that map to IDS classification facets.
 * This is the single source of truth used by both the IDS generator and the
 * wizard UI (relation grouping). Update here to change what gets included.
 *
 * Excluded (commented out) types and the reason:
 * - IsSimilarTo: too loose a match for a mandatory IDS requirement
 * - IsParentOf: intra-dictionary hierarchy; cross-dict case is uncommon
 * - HasPart:    composition relation, not a classification reference
 * - IsPartOf:   has a native IDS partOf facet equivalent — out of scope for now
 */
export const CLASSIFICATION_RELATION_TYPES: ReadonlySet<BsddClassRelation['relationType']> =
  new Set([
    'HasReference',
    'IsEqualTo',
    // 'IsSimilarTo',
    'IsChildOf',
    // 'IsParentOf',
    // 'HasPart',
    // 'IsPartOf',
  ] as const);

export interface BsddClassDetails {
  uri: string;
  code: string;
  name: string;
  definition?: string;
  description?: string;
  classType?: string;
  referenceCode?: string;
  status?: string;
  dictionaryUri?: string;
  relatedIfcEntityNames?: string[];
  synonyms?: string[];
  classProperties?: BsddClassProperty[];
  classRelations?: BsddClassRelation[];
  parentClassReference?: {
    uri: string;
    code: string;
    name: string;
  };
  childClassReferences?: {
    uri: string;
    code: string;
    name: string;
  }[];
}

export interface AggregatedProperty {
  propertyUri: string;
  propertyCode: string;
  name: string;
  definition?: string;
  dataType?: string;
  propertySet?: string;
  propertyDictionaryName?: string;
  classCount: number;
  classUris: string[];
}

export interface BsddValidationMessage {
  message?: string;
}

export interface BsddValidationResult {
  isOk: boolean | null;
  isValidatedAsync: boolean;
  errors?: BsddValidationMessage[];
  warnings?: BsddValidationMessage[];
  informationalMessages?: BsddValidationMessage[];
}

export interface BsddApiError extends Error {
  status?: number;
  response?: unknown;
}
