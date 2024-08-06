import { ActionIcon, Center, Paper } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IfcClassification, IfcClassificationReference } from '../../common/src/ifc/ifc';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  fetchDictionaryClasses,
  selectBsddDictionaries,
  selectGroupedClasses,
  selectMainDictionaryClassification,
} from './features/bsdd/bsddSlice';
import { selectHasAssociationsMap, setHasAssociations } from './features/ifc/ifcEntitySlice';
import { selectActiveDictionariesMap, selectMainDictionaryUri } from './features/settings/settingsSlice';
import Slicer from './Slicer';

interface ClassificationsProps {
  height: number;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
}

interface Option {
  label: string;
  value: string;
  uri: string;
}

function Classifications({ height, handleMouseDown }: ClassificationsProps) {
  const dispatch = useAppDispatch();
  const [optionsMap, setOptionsMap] = useState<Map<string, Option[]>>(new Map());

  const [selectedIfcClassificationReferences, setSelectedIfcClassificationReferences] = useState<
    Map<string, Option | null>
  >(new Map());
  const activeDictionariesMap = useAppSelector(selectActiveDictionariesMap);
  const hasAssociations = useAppSelector(selectHasAssociationsMap);
  const dictionaries = useSelector(selectBsddDictionaries);
  const groupedClassRelations = useSelector(selectGroupedClasses);
  const mainDictionaryClassification = useSelector(selectMainDictionaryClassification);
  const mainDictionaryUri = useSelector(selectMainDictionaryUri);

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

        const classRelationsUris = mainDictionaryClassification?.classRelations?.map(
          (relation) => relation.relatedClassUri,
        );

        const filteredGroup = classRelationGroup?.filter((classRelation) => {
          return classRelationsUris?.includes(classRelation.uri);
        });

        if (filteredGroup && filteredGroup.length > 0) {
          options = filteredGroup.map((classRelation) => ({
            value: classRelation.code,
            label: classRelation.name,
            uri: classRelation.uri,
          }));
        } else {
          try {
            const fetchedClasses = await dispatch(
              fetchDictionaryClasses({
                location: dictionaryUri,
                languageCode: 'nl-NL',
              }),
            ).unwrap();

            options = fetchedClasses.map(
              (fetchedClass) =>
                ({
                  value: fetchedClass.code as string,
                  label: fetchedClass.name || '',
                  uri: fetchedClass.uri,
                } as Option),
            );
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
                uri: dictionaryUri,
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
  ]);

  useEffect(() => {
    const fetchClasses = () => {
      const newClassificationReferences = Array.from(selectedIfcClassificationReferences.entries())
        .map(([dictionaryUri, option]) => {
          if (!option || !option.value) return null;
          const dictionary = dictionaries[dictionaryUri];
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
        })
        .filter((ref) => ref !== null);

      if (newClassificationReferences.length > 0) {
        dispatch(setHasAssociations(newClassificationReferences));
      }
    };

    fetchClasses();
  }, [dictionaries, dispatch, selectedIfcClassificationReferences]);

  return (
    <Paper style={{ height: `${height}px`, position: 'relative' }}>
      {Array.from(activeDictionariesMap.entries()).map(([dictionaryUri, dictionary]) => (
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
          }}
          placeholder="Search classes"
          disabled={
            dictionaryUri === mainDictionaryClassification?.dictionaryUri || optionsMap.get(dictionaryUri)?.length === 1
          }
        />
      ))}
      <Center onMouseDown={handleMouseDown} style={{ marginTop: '4px' }}>
        <ActionIcon m="xxs" variant="outline" size="lg" radius="xl" aria-label="Settings">
          <IconArrowDown />
        </ActionIcon>
      </Center>
    </Paper>
  );
}

export default Classifications;
