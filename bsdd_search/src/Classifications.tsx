import { Select } from '@mantine/core';
import { groupBy } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { ClassContractV1, DictionaryContractV1, RequestParams } from '../../common/src/BsddApi/BsddApiBase';
import { useAppSelector } from './app/hooks';
import { selectActiveDictionaries, selectActiveDictionaryLocations } from './features/settings/settingsSlice';

interface ClassificationSelectsProps {
  api: BsddApi<unknown>;
  activeClassificationUri: string | undefined;
  setClassifications: (value: ClassContractV1[]) => void;
  domains: { [id: string]: DictionaryContractV1 };
}

const getGroupedClassifications = (classifications: ClassContractV1[]) => groupBy(classifications, 'dictionaryUri');

/**
 * Fetches a classification from the bSDD API.
 *
 * @param api - The instance of the BsddApi.
 * @param classificationUri - The URI of the classification to fetch.
 * @param params - The request parameters.
 * @returns A promise that resolves to the fetched classification or null if an error occurred.
 */
async function fetchClassification(
  api: BsddApi<unknown>,
  classificationUri: string,
  params: RequestParams,
): Promise<ClassContractV1 | null> {
  try {
    const response = await api.api.classV1List({ Uri: classificationUri, IncludeClassRelations: true }, params);
    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.data;
  } catch (err) {
    console.error('Error fetching classification:', err);
    return null;
  }
}

function Classifications({ api, activeClassificationUri, setClassifications, domains }: ClassificationSelectsProps) {
  const activeDictionaries = useAppSelector(selectActiveDictionaries);
  const activeDictionaryLocations = useAppSelector(selectActiveDictionaryLocations);
  const [classificationCount, setClassificationCount] = useState<number>(0);
  const [classificationUris, setClassificationUris] = useState<{
    [id: string]: Promise<ClassContractV1 | null>;
  }>({});
  const [originalClassifications, setOriginalClassifications] = useState<ClassContractV1[]>([]);
  const [groupedClassifications, setGroupedClassifications] = useState(() =>
    getGroupedClassifications(originalClassifications),
  );
  const [selectedValues, setSelectedValues] = useState<{ [dictionaryUri: string]: string }>({});

  /**
   * Fetches a classification from the API and updates the state.
   *
   * @param {string} classificationUri - The URI of the classification to fetch.
   * @returns {Promise<ClassContractV1 | null>} - A promise that resolves to the fetched classification or null if the fetch fails.
   */
  const getClassification = useCallback(
    (classificationUri: string): Promise<ClassContractV1 | null> => {
      const params: RequestParams = {
        headers: { Accept: 'text/plain' },
      };

      const classificationPromise: Promise<ClassContractV1 | null> = new Promise(function (resolve) {
        const queryParameters = {
          Uri: classificationUri,
          IncludeClassRelations: true,
          IncludeClassProperties: true,
        };
        resolve(
          api.api
            .classV1List(queryParameters, params)
            .then((response) => {
              if (response.status !== 200) {
                console.error(`API request failed with status ${response.status}`);
                return null;
              }
              return response.data;
            })
            .catch((err) => {
              console.error('Error fetching classification:', err);
              return null;
            }),
        );
      });
      setClassificationUris((prevClassificationUris) => ({
        ...prevClassificationUris,
        classificationUri: classificationPromise,
      }));
      return classificationPromise;
    },
    [api.api],
  );

  useEffect(() => {
    setGroupedClassifications(getGroupedClassifications(originalClassifications));
  }, [originalClassifications]);

  useEffect(() => {
    setClassificationCount(0);
    if (activeClassificationUri) {
      const initialClassificationUris: {
        [id: string]: Promise<ClassContractV1 | null>;
      } = {};
      if (activeClassificationUri) {
        initialClassificationUris[activeClassificationUri] = getClassification(activeClassificationUri);
      }
      setClassificationUris(initialClassificationUris);
    }
  }, [activeClassificationUri, getClassification]);

  useEffect(() => {
    const params: RequestParams = {
      headers: { Accept: 'text/plain' },
    };

    setClassificationCount(Object.keys(classificationUris).length);
    if (classificationCount === Object.keys(classificationUris).length) {
      return;
    }
    Promise.allSettled(Object.values(classificationUris)).then(function (results) {
      const classificationResults = results
        .map((result) => {
          if (result.status === 'fulfilled') {
            return result.value;
          }
          return null;
        })
        .filter((x): x is ClassContractV1 => x !== null);

      results.map(async (result) => {
        if (result.status === 'fulfilled') {
          const c = result.value;
          if (c && c.classRelations) {
            const extendedClassificationUris: {
              [id: string]: Promise<ClassContractV1 | null>;
            } = {
              ...classificationUris,
            };
            c.classRelations.forEach((classificationRelation) => {
              if (!(classificationRelation.relatedClassUri in Object.keys(classificationUris))) {
                extendedClassificationUris[classificationRelation.relatedClassUri] = fetchClassification(
                  api,
                  classificationRelation.relatedClassUri,
                  params,
                );
              }
            });
            setClassificationUris(extendedClassificationUris);
          }
        }
      });

      // Filter classifications based on active dictionaries
      const activeClassificationResults = classificationResults.filter(
        (classification) =>
          classification.dictionaryUri && activeDictionaryLocations.includes(classification.dictionaryUri),
      );

      // Filter selectedValues based on active dictionaries
      const newSelectedValues: { [dictionaryUri: string]: string } = Object.keys(selectedValues)
        .filter((dictionaryUri) => activeDictionaryLocations.includes(dictionaryUri))
        .reduce((obj, key) => {
          obj[key] = selectedValues[key];
          return obj;
        }, {} as { [key: string]: string });

      const newGroupedClassifications = groupBy(activeClassificationResults, 'dictionaryUri');
      Object.entries(newGroupedClassifications).forEach(([dictionaryUri, classificationsInGroup]) => {
        if (!classificationsInGroup.some((classification) => classification.uri === newSelectedValues[dictionaryUri])) {
          newSelectedValues[dictionaryUri] = classificationsInGroup[0].uri;
        }
      });

      setSelectedValues(newSelectedValues);
      setClassifications(activeClassificationResults);
      setOriginalClassifications(activeClassificationResults);
    });
  }, [
    classificationUris,
    classificationCount,
    selectedValues,
    api,
    setClassifications,
    activeDictionaries,
    activeDictionaryLocations,
  ]);

  useEffect(() => {
    setClassifications(
      Object.values(selectedValues)
        .map((selectedUri) => originalClassifications.find((classification) => classification.uri === selectedUri))
        .filter((classification): classification is ClassContractV1 => classification !== undefined),
    );
  }, [selectedValues, originalClassifications, setClassifications]);

  const handleOnChange = useCallback(
    (dictionaryUri: string) => (selectedUri: string | null) => {
      if (!selectedUri) return;
      const selectedClassification = originalClassifications.find(
        (classification) => classification.uri === selectedUri,
      );
      if (!selectedClassification) {
        console.log(`Selected classification '${selectedUri}' not found`);
        return;
      }

      const newSelectedValues = { ...selectedValues, [dictionaryUri]: selectedUri };
      setSelectedValues(newSelectedValues);
    },
    [originalClassifications, selectedValues],
  );

  return (
    <>
      {Object.entries(groupedClassifications).map(([dictionaryUri, classificationsInGroup]) => (
        <Select
          mb="sm"
          key={dictionaryUri}
          label={domains[dictionaryUri] ? domains[dictionaryUri].name : ''}
          data={classificationsInGroup.map((classification) => ({
            value: classification.uri,
            label: classification.name,
          }))}
          value={selectedValues[dictionaryUri]}
          readOnly={classificationsInGroup.length === 1}
          variant={classificationsInGroup.length === 1 ? 'filled' : 'default'}
          onChange={(value) => handleOnChange(dictionaryUri)(value)}
        />
      ))}
    </>
  );
}
export default Classifications;
