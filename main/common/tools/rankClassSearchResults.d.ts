import { ClassSearchResultContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
export type SearchMatchedOn = 'synonym' | 'description';
export interface RankedClassSearchResult {
    bsddClass: ClassSearchResultContractV1 & {
        uri: string;
        name: string;
    };
    matchedOn?: SearchMatchedOn;
}
export declare function rankClassSearchResults(classes: ClassSearchResultContractV1[] | null | undefined, query: string): RankedClassSearchResult[];
