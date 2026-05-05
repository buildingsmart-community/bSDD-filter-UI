import { ComboboxParsedItem } from '@mantine/core';
interface FilterPickedTagsInput {
    data: ComboboxParsedItem[];
    value: string[];
}
export declare function filterPickedValues({ data, value }: FilterPickedTagsInput): ComboboxParsedItem[];
export {};
