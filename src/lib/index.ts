// Components
export { default as BsddSearch } from './BsddSearch';
export { default as BsddSelection } from './BsddSelection';
export { default as BsddSettings } from './BsddSettings';

// Provider (new - single integration point)
export { BsddProvider } from './providers/BsddProvider';
export type { BsddProviderProps } from './providers/BsddProvider';

// Bridge context
export { useBsddBridge } from './providers/BsddBridgeContext';
export type { BsddBridgeCallbacks } from './providers/BsddBridgeContext';

// Stores
export { useSettingsStore } from './stores/settingsStore';
export { useIfcDataStore } from './stores/ifcDataStore';
export type { EntityState } from './stores/ifcDataStore';

// API Hooks
export { useDictionaries, useDictionary } from './api/hooks/useDictionaries';
export { useDictionaryClasses } from './api/hooks/useDictionaryClasses';
export { useClassDetails, useClasses } from './api/hooks/useClassDetails';
export { useSearchInDictionary } from './api/hooks/useSearchInDictionary';
export { usePropertyNames } from './api/hooks/usePropertyNames';

// Types
export type { BsddSettings as BsddSettingsType, BsddDictionary, BsddBridgeData } from './common/IfcData/bsddBridgeData';
export type { IfcEntity, IfcClassification, IfcClassificationReference, IfcPropertySet } from './common/IfcData/ifc';
