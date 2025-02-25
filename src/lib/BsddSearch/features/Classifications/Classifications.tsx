import { Box, Button, Paper, Tooltip } from '@mantine/core';
import { IconGripHorizontal } from '@tabler/icons-react';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import { DictionaryContractV1 } from '../../../common/BsddApi/BsddApiBase';
import { getSlicerClassificationUris } from '../../../common/BsddApi/BsddApiHelpers';
import { IfcClassification, IfcClassificationReference } from '../../../common/IfcData/ifc';
import {
  fetchDictionaryClasses,
  selectBsddDictionaries,
  selectGroupedClasses,
  selectMainDictionaryClassification,
  selectMainDictionaryClassificationUri,
  updateFilterDictionaryClassificationUris,
  updateMainDictionaryClassificationUri,
} from '../../../common/slices/bsddSlice';
import { selectHasAssociationsMap, setHasAssociations } from '../../../common/slices/ifcEntitySlice';
import {
  selectActiveDictionariesMap,
  selectIfcDictionaryUri,
  selectMainDictionaryUri,
} from '../../../common/slices/settingsSlice';
import Slicer from '../../Slicer';

interface ClassificationsProps {
  height: number;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
}

interface Option {
  label: string;
  value: string;
  uri: string;
}

/**
 * Converts a selected classification reference option to an IfcClassificationReference object.
 *
 * @param dictionaryUri - The URI of the dictionary.
 * @param option - The selected classification reference option.
 * @param dictionaries - The dictionaries object from the state.
 * @returns An IfcClassificationReference object or null if the option or dictionary is invalid.
 */
const convertToIfcClassificationReference = (
  dictionaryUri: string,
  option: Option | null,
  dictionaries: Record<string, DictionaryContractV1>,
): IfcClassificationReference | null => {
  if (!option || !option.value) return null;

  const dictionary = dictionaries[dictionaryUri];
  if (!dictionary) return null;

  return {
    type: 'IfcClassificationReference',
    name: option.label,
    location: option.uri,
    identification: option.value,
    referencedSource: {
      type: 'IfcClassification',
      name: dictionary.name,
      location: dictionary.uri,
      edition: dictionary.version,
      editionDate: dictionary.releaseDate,
    } as IfcClassification,
  } as IfcClassificationReference;
};

/**
 * Fetches bSDD classes and updates the classification references in the state.
 *
 * @param selectedIfcClassificationReferences - The selected IFC classification references.
 * @param dictionaries - The dictionaries object from the state.
 * @param dispatch - The Redux dispatch function.
 */
const fetchBsddClasses = (
  selectedIfcClassificationReferences: Map<string, Option | null>,
  dictionaries: Record<string, DictionaryContractV1>,
  dispatch: any,
) => {
  const newClassificationReferences = Array.from(selectedIfcClassificationReferences.entries())
    .map(([dictionaryUri, option]) => convertToIfcClassificationReference(dictionaryUri, option, dictionaries))
    .filter((ref): ref is IfcClassificationReference => ref !== null);

  if (newClassificationReferences.length > 0) {
    dispatch(setHasAssociations(newClassificationReferences));
  }
};

function Classifications({ height, handleMouseDown }: ClassificationsProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [optionsMap, setOptionsMap] = useState<Map<string, Option[]>>(new Map());

  const [selectedIfcClassificationReferences, setSelectedIfcClassificationReferences] = useState<
    Map<string, Option | null>
  >(new Map());
  const activeDictionariesMap = useAppSelector(selectActiveDictionariesMap);
  const hasAssociations = useAppSelector(selectHasAssociationsMap);
  const dictionaries = useAppSelector(selectBsddDictionaries);
  const groupedClassRelations = useAppSelector(selectGroupedClasses);
  const mainDictionaryClassification = useAppSelector(selectMainDictionaryClassification);
  const mainDictionaryClassificationUri = useAppSelector(selectMainDictionaryClassificationUri);
  const mainDictionaryUri = useAppSelector(selectMainDictionaryUri);
  const ifcDictionaryUri = useAppSelector(selectIfcDictionaryUri);

  useEffect(() => {
    const updateOptionsMap = async () => {
      const entries = Array.from(activeDictionariesMap.entries());
      const optionsMapPromises = entries.map(async ([dictionaryUri, dictionary]): Promise<[string, Option[]]> => {
        if (mainDictionaryClassification && dictionaryUri === mainDictionaryUri) {
          const { code, name, uri } = mainDictionaryClassification;
          return [
            dictionaryUri,
            [
              {
                value: code,
                label: name,
                uri,
              } as Option,
            ],
          ];
        }

        let options: Option[] = [];
        const classRelationGroup = groupedClassRelations[dictionaryUri];

        const classRelationUris = getSlicerClassificationUris(mainDictionaryClassification, ifcDictionaryUri);

        const filteredGroup = classRelationGroup?.filter((classRelation) => {
          return classRelationUris.includes(classRelation.uri);
        });

        if (filteredGroup && filteredGroup.length > 0) {
          options = filteredGroup.map((classRelation) => ({
            value: classRelation.code,
            label: classRelation.name,
            uri: classRelation.uri,
          }));
        } else {
          try {
            const fetchedClasses = await dispatch(fetchDictionaryClasses(dictionaryUri)).unwrap();

            options =
              fetchedClasses?.map(
                (fetchedClass) =>
                  ({
                    value: fetchedClass.code as string,
                    label: fetchedClass.name || '',
                    uri: fetchedClass.uri,
                  }) as Option,
              ) ?? [];
          } catch (error) {
            console.error('Failed to fetch dictionary classes for', dictionaryUri, error);
            options = [];
          }
        }

        return [dictionaryUri, options];
      });

      const resolvedOptionsMap = await Promise.all(optionsMapPromises);
      const newOptionsMap = new Map(resolvedOptionsMap);
      setOptionsMap(newOptionsMap);

      const newSelectedIfcClassificationReferences = new Map<string, Option | null>();

      newOptionsMap.forEach((options, dictionaryUri) => {
        if (options.length === 1) {
          newSelectedIfcClassificationReferences.set(dictionaryUri, options[0]);
        } else if (dictionaryUri in hasAssociations) {
          const dictionaryAssociations = hasAssociations[dictionaryUri];
          if (dictionaryAssociations.length === 1) {
            const dictionaryAssociation = dictionaryAssociations[0];
            const isValidOption = options.some((option) => option.value === dictionaryAssociation.identification);

            if (isValidOption) {
              const dictionaryOption: Option = {
                label: dictionaryAssociation.name || '',
                value: dictionaryAssociation.identification || '',
                uri: dictionaryAssociation.location || '',
              };
              newSelectedIfcClassificationReferences.set(dictionaryUri, dictionaryOption);
            }
          }
        }
      });
      setSelectedIfcClassificationReferences(newSelectedIfcClassificationReferences);
    };

    updateOptionsMap();
  }, [
    activeDictionariesMap,
    groupedClassRelations,
    dispatch,
    hasAssociations,
    mainDictionaryClassification,
    mainDictionaryUri,
    ifcDictionaryUri,
  ]);

  useEffect(() => {
    fetchBsddClasses(selectedIfcClassificationReferences, dictionaries, dispatch);
  }, [dictionaries, dispatch, selectedIfcClassificationReferences]);

  return (
    <Paper style={{ height: `${height}px`, position: 'relative' }}>
      {Array.from(activeDictionariesMap.entries()).map(([dictionaryUri, dictionary]) => {
        const isMainDictionary = dictionaryUri === mainDictionaryUri;
        const isIfcDictionary = dictionaryUri === mainDictionaryClassification?.dictionaryUri;

        if (isMainDictionary) {
          return (
            <Slicer
              key={dictionaryUri}
              height={height}
              label={dictionary.name}
              options={optionsMap.get(dictionaryUri) || []}
              value={selectedIfcClassificationReferences.get(dictionaryUri) || null}
              setValue={(newValue) => {
                if (newValue?.uri && newValue?.uri !== mainDictionaryClassificationUri) {
                  const newValues = new Map(selectedIfcClassificationReferences);
                  newValues.set(dictionaryUri, newValue);
                  setSelectedIfcClassificationReferences(newValues);

                  dispatch(updateMainDictionaryClassificationUri(newValue.uri));
                }
              }}
              placeholder={t('classifications.searchClassesPlaceholder')}
            />
          );
        }

        if (isIfcDictionary) {
          return null;
        }

        return (
          <Slicer
            key={dictionaryUri}
            height={height}
            label={dictionary.name}
            options={optionsMap.get(dictionaryUri) || []}
            value={selectedIfcClassificationReferences.get(dictionaryUri) || null}
            setValue={(newValue) => {
              const newValues = new Map(selectedIfcClassificationReferences);
              newValues.set(dictionaryUri, newValue);
              setSelectedIfcClassificationReferences(newValues);

              // Dispatch the action to update filter dictionaries
              const newUris = Array.from(newValues.values())
                .filter((option) => option !== null && option.uri !== mainDictionaryClassificationUri)
                .map((option) => option!.uri);
              dispatch(updateFilterDictionaryClassificationUris(newUris));
            }}
            placeholder={t('classifications.searchClassesPlaceholder')}
          />
        );
      })}
      <Box onMouseDown={handleMouseDown} style={{ marginTop: '4px' }}>
        <Tooltip label={t('classifications.dragResize')} withArrow>
          <Button fullWidth variant="subtle" size="sm" color="gray" aria-label={t('classifications.dragResize')}>
            <IconGripHorizontal />
          </Button>
        </Tooltip>
      </Box>
    </Paper>
  );
}

export default Classifications;
