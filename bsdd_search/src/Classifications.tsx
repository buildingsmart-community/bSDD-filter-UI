import { Select } from '@mantine/core';
import { groupBy } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { ClassContractV1, ClassListItemContractV1, RequestParams } from '../../common/src/BsddApi/BsddApiBase';
import { IfcClassificationReference, IfcEntity } from '../../common/src/IfcData/ifc';
import { useAppSelector } from './app/hooks';
import { selectBsddDictionaries, selectdictionaryClasses } from './features/bsdd/bsddSlice';
import { selectIfcEntity } from './features/IfcData/ifcDataSlice';
import { selectActiveDictionaries, selectActiveDictionaryLocations } from './features/settings/settingsSlice';

interface ClassificationSelectsProps {
  api: BsddApi<unknown>;
  activeClassificationUri: string | undefined;
  setClassifications: (value: ClassContractV1[]) => void;
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

/**
 * Retrieves the selected classification reference for the given IFC entity and dictionary URI.
 * @param dictionaryUri - The URI of the dictionary.
 * @param ifcEntity - The IFC entity to search for the classification reference.
 * @returns The selected IfcClassificationReference, or undefined if not found.
 */
function getSelectedClassification(
  dictionaryUri: string,
  ifcEntity: IfcEntity | undefined,
): IfcClassificationReference | undefined {
  if (!ifcEntity) return undefined;

  const foundAssociation = ifcEntity.hasAssociations?.find((association) => {
    if (association.type === 'IfcClassificationReference') {
      const classificationReference = association;
      return (
        classificationReference.referencedSource?.location &&
        classificationReference.referencedSource.location === dictionaryUri
      );
    }
    return false;
  });

  return foundAssociation as IfcClassificationReference | undefined;
}

/**
 * Formats the IFC class code by adding a dot separator before the last uppercase character
 * to split the IFC entity from PredefinedType.
 * @param code - The IFC class code to be formatted.
 * @returns The formatted IFC class code.
 */
const formatIfcClassCode = (code: string): string => {
  for (let i = code.length - 2; i >= 0; i -= 1) {
    if (code[i] === code[i].toLowerCase() && code[i + 1] === code[i + 1].toUpperCase()) {
      if (code[code.length - 1] === code[code.length - 1].toUpperCase()) {
        return `${code.slice(0, i + 1)}.${code.slice(i + 1)}`;
      }
      break;
    }
  }
  return code;
};

const formatLabel = (name: string, uri: string, code: string | null | undefined, showCode: boolean): string => {
  if (!showCode) return name || '';

  const isIfcUri = uri === 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3';
  const formattedCode = isIfcUri && code ? ` (${formatIfcClassCode(code)})` : '';
  return `${name}${formattedCode}`;
};

const buildOptionsFromClasses = (
  classes: ClassContractV1[] | ClassListItemContractV1[],
  dictionaryUri: string,
  showCode: boolean,
) => {
  return classes.map((classification) => {
    return {
      value: classification.uri ?? '',
      label: formatLabel(classification.name ?? '', dictionaryUri, classification.code, showCode),
    };
  });
};

/**
 * Builds Mantine select options for the classifications in a bSDD Dictionary.
 * @param classificationsInGroup - The array of possible classes for the Dictionary.
 * @param dictionaryUri - The URI of the dictionary.
 * @returns An array of select options for the classifications.
 */
const buildClassSelectOptions = (
  groupedClassifications: { [key: string]: ClassContractV1[] },
  activeDictionaryLocations: { [key: string]: ClassListItemContractV1[] },
) => {
  const options: { [key: string]: { value: string; label: string }[] } = {};
  Object.entries(activeDictionaryLocations).forEach(([dictionaryUri, dictionaryClasses]) => {
    options[dictionaryUri] = groupedClassifications[dictionaryUri]
      ? buildOptionsFromClasses(groupedClassifications[dictionaryUri], dictionaryUri, true)
      : buildOptionsFromClasses(dictionaryClasses, dictionaryUri, false);
  });
  return options;
};

function Classifications({ api, activeClassificationUri, setClassifications }: ClassificationSelectsProps) {
  const activeDictionaries = useAppSelector(selectActiveDictionaries);
  const activeDictionaryLocations = useAppSelector(selectActiveDictionaryLocations);
  const activeDictionaryClasses = useAppSelector(selectdictionaryClasses);
  const ifcEntity = useAppSelector(selectIfcEntity);
  const dictionaries = useAppSelector(selectBsddDictionaries);
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
  }, [activeClassificationUri, getClassification, activeDictionaries]);

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

  // Update selected classification values with values incoming from selection
  useEffect(() => {
    setSelectedValues((currentSelectedValues) => {
      const newSelectedValues = activeDictionaryLocations.reduce((acc, dictionaryUri) => {
        const prevSelectedValue = currentSelectedValues[dictionaryUri];
        const selectedClassification =
          prevSelectedValue || getSelectedClassification(dictionaryUri, ifcEntity)?.location || '';
        return { ...acc, [dictionaryUri]: selectedClassification };
      }, {});

      return newSelectedValues;
    });
  }, [activeDictionaryLocations, ifcEntity]);

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

      setSelectedValues((prevSelectedValues) => ({
        ...prevSelectedValues,
        [dictionaryUri]: selectedUri,
      }));
    },
    [originalClassifications],
  );

  const options = buildClassSelectOptions(groupedClassifications, activeDictionaryClasses);
  return (
    <>
      {Object.entries(options).map(([dictionaryUri, classOptions]) => (
        <Select
          mb="sm"
          key={dictionaryUri}
          label={dictionaries[dictionaryUri] ? dictionaries[dictionaryUri].name : ''}
          data={classOptions}
          value={selectedValues[dictionaryUri]}
          readOnly={classOptions.length === 1}
          variant={classOptions.length === 1 ? 'filled' : 'default'}
          onChange={(value) => handleOnChange(dictionaryUri)(value)}
        />
      ))}
    </>
  );
}
export default Classifications;
