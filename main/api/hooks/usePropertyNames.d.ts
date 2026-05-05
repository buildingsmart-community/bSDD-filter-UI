import { ClassPropertyContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
/**
 * Fetches natural-language property names, one query per property so each is
 * individually cached and re-used across different classes.
 * Returns a merged map of { [propertyUri]: name }.
 */
export declare function usePropertyNames(classProperties: ClassPropertyContractV1[], language: string): {
    data: Record<string, string>;
    isLoading: boolean;
};
