import { ClassListItemContractV1Classes } from '../../../../../shared/bsdd-api/generated/types.gen';
import { SearchMatchedOn } from '../../../common/tools/rankClassSearchResults';
export interface ClassOption {
    label: string;
    value: string;
    uri: string;
    matchedOn?: SearchMatchedOn;
}
export declare const toOptions: (classes: ClassListItemContractV1Classes[]) => ClassOption[];
export declare function useDictionaryClassOptions(dictionaryUri: string, searchText: string, enabled: boolean): {
    options: ClassOption[];
    serverSearch: boolean;
    isSearching: boolean;
    loadMore: () => void;
    isLoadingMore: boolean;
};
