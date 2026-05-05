// Purpose: Exports for shared bSDD API client
// Usage: import { bsddApi, BsddApiClient, BsddDictionary } from '../shared/bsdd-api'

// Transport
export { BsddApiClient, BsddRateLimitError } from './BsddApiClient';
// Wrapper (orchestration + default singleton)
export { BsddApiWrapper, bsddApi, mapClassDetails } from './BsddApiWrapper';
export { BSDD_API_BASE_URL } from './constants';

// Helper functions
export {
  buildClassificationUri,
  parseBsddUri,
  getDictionaryUriFromClass,
  getParentClassificationUris,
  getRelatedIfcEntityUris,
  aggregateClassProperties,
  filterPropertiesByPropertySet,
  getUniquePropertySets,
  isStandardBsddUri,
  extractCodeFromStandardUri,
  delay,
} from './helpers';

// Types
export type {
  BsddDictionary,
  BsddSearchResponse,
  BsddClassListItem,
  BsddDictionaryClassesResponse,
  BsddClassProperty,
  BsddPropertyValue,
  BsddClassRelation,
  BsddClassDetails,
  AggregatedProperty,
} from './types';

export { CLASSIFICATION_RELATION_TYPES } from './types';
