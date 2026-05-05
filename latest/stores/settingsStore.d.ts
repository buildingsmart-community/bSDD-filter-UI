import { BsddDictionary, BsddSettings } from '../common/IfcData/bsddBridgeData';
interface SettingsState extends BsddSettings {
    setMainDictionary: (dict: BsddDictionary | null) => void;
    setIfcDictionary: (dict: BsddDictionary | null) => void;
    setFilterDictionaries: (dicts: BsddDictionary[]) => void;
    setLanguage: (lang: string) => void;
    setIncludeTestDictionaries: (include: boolean | undefined) => void;
    setSettings: (settings: BsddSettings) => void;
}
export declare const useSettingsStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<SettingsState>, "setState" | "persist"> & {
    setState(partial: SettingsState | Partial<SettingsState> | ((state: SettingsState) => SettingsState | Partial<SettingsState>), replace?: false | undefined): unknown;
    setState(state: SettingsState | ((state: SettingsState) => SettingsState), replace: true): unknown;
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<SettingsState, {
            mainDictionary: BsddDictionary | null;
            ifcDictionary: BsddDictionary | null;
            filterDictionaries: BsddDictionary[];
            language: string;
            includeTestDictionaries: boolean | undefined;
        }, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: SettingsState) => void) => () => void;
        onFinishHydration: (fn: (state: SettingsState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<SettingsState, {
            mainDictionary: BsddDictionary | null;
            ifcDictionary: BsddDictionary | null;
            filterDictionaries: BsddDictionary[];
            language: string;
            includeTestDictionaries: boolean | undefined;
        }, unknown>>;
    };
}>;
export declare const selectActiveDictionaries: (state: SettingsState) => BsddDictionary[];
export declare const selectActiveDictionariesMap: (state: SettingsState) => Map<string, import('..').IfcClassification>;
export declare const selectMainDictionaryUri: (state: SettingsState) => string | undefined;
export declare const selectIfcDictionaryUri: (state: SettingsState) => string | undefined;
export declare const selectActiveDictionaryUris: (state: SettingsState) => string[];
export declare const selectSettings: (state: SettingsState) => BsddSettings;
export {};
