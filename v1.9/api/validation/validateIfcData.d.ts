import { QueryClient } from '@tanstack/react-query';
import { BsddDictionary } from '../../common/IfcData/bsddBridgeData';
import { IfcClassificationReference, IfcEntity } from '../../common/IfcData/ifc';
type ValidationState = 'valid' | 'fixed';
type ValidationResult = {
    ifcClassificationReference: IfcClassificationReference;
    validationState: ValidationState;
    message: string | null;
};
export declare function patchIfcClassificationReference(ifcClassificationReference: IfcClassificationReference, queryClient: QueryClient, language: string): Promise<ValidationResult>;
export declare function validateIfcData(ifcEntities: IfcEntity[], queryClient: QueryClient, language: string): Promise<IfcEntity[]>;
export declare function validateDictionary(queryClient: QueryClient, bsddDictionary: BsddDictionary | null): Promise<BsddDictionary | null>;
export declare function validateSettings(queryClient: QueryClient, settings: import('../../common/IfcData/bsddBridgeData').BsddSettings): Promise<import('../../common/IfcData/bsddBridgeData').BsddSettings>;
export declare function ifcEntityToBsddClass(type: string | undefined, predefinedType: string | undefined): string;
export {};
