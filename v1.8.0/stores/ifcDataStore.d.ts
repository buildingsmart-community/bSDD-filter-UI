import { Association, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
export interface EntityState {
    type?: string;
    name?: string;
    description?: string;
    objectType?: string;
    tag?: string;
    predefinedType?: string;
    isDefinedBy?: IfcPropertySet[];
    hasAssociations?: Association[];
}
interface IfcDataState {
    loadedIfcEntities: IfcEntity[];
    selectedIfcEntities: IfcEntity[];
    loadingEntities: boolean;
    savedPropertyIsInstanceMap: Record<string, boolean>;
    propertyIsInstanceMap: Record<string, boolean>;
    currentEntity: EntityState;
    setLoadedIfcEntities: (entities: IfcEntity[]) => void;
    setSelectedIfcEntities: (entities: IfcEntity[]) => void;
    setLoadingEntities: (loading: boolean) => void;
    setSavedPropertyIsInstanceMap: (map: Record<string, boolean>) => void;
    setPropertyIsInstance: (propertyName: string, value: boolean) => void;
    setIfcEntity: (entity: IfcEntity) => void;
    setName: (name: string) => void;
    setDescription: (desc: string) => void;
    setObjectType: (type: string) => void;
    setTag: (tag: string) => void;
    setPredefinedType: (type: string) => void;
    setIsDefinedBy: (sets: IfcPropertySet[]) => void;
    setHasAssociations: (assocs: Association[]) => void;
}
export declare const useIfcDataStore: import('zustand').UseBoundStore<import('zustand').StoreApi<IfcDataState>>;
export declare const selectSelectedIfcEntities: (state: IfcDataState) => IfcEntity[];
export declare const selectIfcEntity: (state: IfcDataState) => IfcEntity;
export declare const selectHasAssociationsMap: (state: IfcDataState) => {
    [key: string]: IfcClassificationReference[];
};
export declare const selectIsDefinedByIncludingAttributes: (state: IfcDataState) => IfcPropertySet[];
export {};
