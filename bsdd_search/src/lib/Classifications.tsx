import { useState, useEffect, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { ClassContractV1, DictionaryContractV1, RequestParams } from '../../../common/src/BsddApi/BsddApiBase';
import { BsddApi } from '../../../common/src/BsddApi/BsddApi';
import { groupBy } from 'lodash';

interface ClassificationSelectsProps {
  api: BsddApi<unknown>;
  activeClassificationUri: string | undefined;
  setClassifications: (value: ClassContractV1[]) => void;
  domains: { [id: string]: DictionaryContractV1 };
  accessToken: string;
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
    const response = await api.api.classV1List({ uri: classificationUri, includeClassRelations: true }, params);
    if (response.status !== 200) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.data;
  } catch (err) {
    console.error('Error fetching classification:', err);
    return null;
  }
}

function ClassificationSelects({
  api,
  activeClassificationUri,
  setClassifications,
  domains,
  accessToken,
}: ClassificationSelectsProps) {
  const [classificationCount, setClassificationCount] = useState<number>(0);
  const [classificationUris, setClassificationUris] = useState<{
    [id: string]: Promise<ClassContractV1 | null>;
  }>({});
  const [originalClassifications, setOriginalClassifications] = useState<ClassContractV1[]>([]);
  const [groupedClassifications, setGroupedClassifications] = useState(() =>
    getGroupedClassifications(originalClassifications),
  );
  const [selectedValues, setSelectedValues] = useState<{ [dictionaryUri: string]: string }>({});

  const params: RequestParams = {
    headers: { Accept: 'text/plain' },
  };

  if (accessToken !== '') {
    params.headers = { ...params.headers, Authorization: 'Bearer ' + accessToken };
  }

  /**
   * Fetches a classification from the API and updates the state.
   *
   * @param {string} classificationUri - The URI of the classification to fetch.
   * @returns {Promise<ClassContractV1 | null>} - A promise that resolves to the fetched classification or null if the fetch fails.
   */
  function getClassification(classificationUri: string): Promise<ClassContractV1 | null> {
    const classificationPromise: Promise<ClassContractV1 | null> = new Promise(function (resolve) {
      const queryParameters = {
        uri: classificationUri,
        includeClassRelations: true,
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
    setClassificationUris({
      ...classificationUris,
      classificationUri: classificationPromise,
    });
    return classificationPromise;
  }

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
  }, [activeClassificationUri]);

  useEffect(() => {
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
      const newSelectedValues: { [dictionaryUri: string]: string } = {};
      const newGroupedClassifications = groupBy(classificationResults, 'dictionaryUri');
      Object.entries(newGroupedClassifications).forEach(([dictionaryUri, classificationsInGroup]) => {
        if (selectedValues[dictionaryUri]) {
          newSelectedValues[dictionaryUri] = selectedValues[dictionaryUri];
        } else {
          newSelectedValues[dictionaryUri] = classificationsInGroup[0].uri;
        }
      });
      setSelectedValues(newSelectedValues);
      setClassifications(classificationResults);
      setOriginalClassifications(classificationResults);
    });
  }, [classificationUris]);

  useEffect(() => {
    setClassifications(
      Object.values(selectedValues)
        .map((selectedUri) => originalClassifications.find((classification) => classification.uri === selectedUri))
        .filter((classification): classification is ClassContractV1 => classification !== undefined),
    );
  }, [selectedValues]);

  const handleOnChange = useCallback(
    (dictionaryUri: string) => (e: { target: { value: any } }) => {
      const selectedUri = e.target.value;
      const selectedClassification = originalClassifications.find(
        (classification) => classification.uri === selectedUri,
      );
      if (!selectedClassification) {
        console.error('Selected classification not found');
        return;
      }

      const newSelectedValues = { ...selectedValues, [dictionaryUri]: selectedUri };
      setSelectedValues(newSelectedValues);
    },
    [originalClassifications, selectedValues],
  );

  return (
    <div>
      {Object.entries(groupedClassifications).map(([dictionaryUri, classificationsInGroup], groupIndex) => (
        <Form.Group className="mb-3 row" key={groupIndex}>
          <Form.Label className="col-sm-5 col-form-label">{domains[dictionaryUri].name}</Form.Label>
          <div className="col-sm-7">
            <Form.Select
              value={selectedValues[dictionaryUri] || ''}
              disabled={classificationsInGroup.length === 1}
              onChange={handleOnChange(dictionaryUri)}
            >
              {classificationsInGroup.map((classification, index) => (
                <option key={index} value={classification.uri}>
                  {classification.name}
                </option>
              ))}
            </Form.Select>
          </div>
        </Form.Group>
      ))}
    </div>
  );
}
export default ClassificationSelects;
