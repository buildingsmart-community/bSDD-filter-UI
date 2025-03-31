import { Alert } from '@mantine/core';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../common/app/hooks';
import {
  selectMainDictionary,
} from '../common/slices/settingsSlice';
import {
  fetchDictionaryClasses,
  selectDictionaryClasses,
  updateFilterDictionaryClassificationUris,
} from '../common/slices/bsddSlice';
import { ClassListItemContractV1Classes } from '../common/BsddApi/BsddApiBase';
import Importer from './features/Importer/Importer';
import Validator from './features/Validator/Validator';
import type { RootState } from '../common/app/store';
import type { IdsClass } from "./types/types";

const fetchBsddClasses = async (
  ids: IdsClass,
  location: string,
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
): Promise<void> => {
  const classes = selectDictionaryClasses(state, location);
  if (classes) return;

  await dispatch(fetchDictionaryClasses(location))
  .then(async result =>{
    if (result.payload) {
      var bsdd = result.payload as ClassListItemContractV1Classes[];
      
      const barSet = new Set(ids.ids.specifications.specification.map(specification => specification._name));
      const matches = bsdd.filter(obj => obj.name && barSet.has(obj.name));
      
      var uris = Array.from(matches.values()).map(match => match.uri as string);
      await dispatch(updateFilterDictionaryClassificationUris(uris));
      return;
    }
  })

  console.error('Failed to fetch dictionary classes');
  return;
};

function IdsComponent() {
  const { t } = useTranslation();
  const ids = useAppSelector((state) => state.ids.idsFile);
  const state = useAppSelector((state) => state);
  const mainDictionary = useAppSelector(selectMainDictionary);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(!mainDictionary || !mainDictionary.ifcClassification.location || !ids){
      return;
    }

    const fetchBsddData = async () => {
      fetchBsddClasses(ids, mainDictionary.ifcClassification.location, state, dispatch)
    };

    fetchBsddData();
  }, [ids, mainDictionary, state, dispatch]);

  return (
    <div>
    <Importer/>
      {ids && mainDictionary && (
        <Validator />
      )}
      {!mainDictionary && (
        <Alert mx="md" mt="xl">
          {t('idsNoBsddDomainSelected', "Nog geen bSDD domein geselecteerd")}
        </Alert>
      )}
    </div>
  );
}

export default IdsComponent;
