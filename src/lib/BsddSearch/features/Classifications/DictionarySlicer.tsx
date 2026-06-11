import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Slicer from '../../Slicer';
import { type ClassOption, useDictionaryClassOptions } from './useDictionaryClassOptions';

interface DictionarySlicerProps {
  height: number;
  dictionaryUri: string;
  label: string | undefined;
  /** Options derived from the main class relations; when present, no fetching is needed */
  relationOptions: ClassOption[] | undefined;
  value: ClassOption | null;
  setValue: (newValue: ClassOption | null) => void;
  loading: boolean;
}

function DictionarySlicer({
  height,
  dictionaryUri,
  label,
  relationOptions,
  value,
  setValue,
  loading,
}: DictionarySlicerProps) {
  const { t } = useTranslation();
  const hasRelations = !!relationOptions?.length;
  const [searchText, setSearchText] = useState('');
  const {
    options: fetchedOptions,
    serverSearch,
    isSearching,
    loadMore,
    isLoadingMore,
  } = useDictionaryClassOptions(dictionaryUri, searchText, !hasRelations);

  const options = hasRelations ? (relationOptions as ClassOption[]) : fetchedOptions;

  // Relation-backed single options are auto-selected during reconciliation in
  // Classifications; a relation-less dictionary with a single class is seeded
  // here. Never from search results — those are a filtered subset.
  useEffect(() => {
    if (!hasRelations && !searchText && options.length === 1 && !value) setValue(options[0]);
  }, [hasRelations, searchText, options, value, setValue]);

  return (
    <Slicer
      height={height}
      label={label}
      options={options}
      value={value}
      setValue={setValue}
      placeholder={t('classifications.searchClassesPlaceholder')}
      onSearch={serverSearch ? setSearchText : undefined}
      isSearching={isSearching}
      onLoadMore={serverSearch ? loadMore : undefined}
      isLoadingMore={isLoadingMore}
      loading={loading}
    />
  );
}

export default DictionarySlicer;
