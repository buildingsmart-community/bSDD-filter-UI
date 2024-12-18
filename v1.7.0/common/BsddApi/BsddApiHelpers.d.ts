import { ClassContractV1, DictionaryContractV1 } from './BsddApiBase';
export declare function getBsddClass(bsddEnvironmentUri: string, uri: string): Promise<ClassContractV1>;
export declare function getBsddDictionary(bsddEnvironmentUri: string, uri: string): Promise<DictionaryContractV1>;
