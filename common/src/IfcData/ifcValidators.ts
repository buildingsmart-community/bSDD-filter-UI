import { RootState } from '../../../bsdd_selection/src/app/store';
import { fetchDictionaryClasses, selectDictionaryClasses } from '../BsddApi/bsddSlice';
import { IfcClassificationReference } from './ifc';
import { convertBsddDictionaryToIfc } from './ifcBsddConverters';
import { DictionaryClassesResponseContractV1 } from '../BsddApi/BsddApiBase';
import { ClassListItemContractV1 } from '../BsddApi/BsddApiBase';
import { selectActiveDictionaries } from '../settings/settingsSlice';

type ValidationState = 'valid' | 'invalid' | 'fixed';

export const preprocessIfcClassificationReference = async (
  ifcClassificationReference: IfcClassificationReference,
  dispatch: Function,
  getState: Function,
) => {
  let newReference: IfcClassificationReference = ifcClassificationReference;
  let validationState: ValidationState = 'invalid';
  let dictionary: DictionaryClassesResponseContractV1 | null = null;
  const activeDictionaries = selectActiveDictionaries(getState() as RootState);

  const { location, identification, referencedSource } = ifcClassificationReference;

  let classes: ClassListItemContractV1[] | null | undefined = null;

  if (referencedSource?.location) {
    classes = selectDictionaryClasses(getState(), referencedSource.location);

    if (!classes) {
      const result = await dispatch(fetchDictionaryClasses(referencedSource.location));
      classes = result.payload;
    }
  }
  if (location) {
    validationState = 'valid';
  }
  if (!location && identification && classes) {
    if (classes) {
      let bsddClass = classes.find((dictionaryv1class) => {
        if (dictionaryv1class.code === identification) {
        }
        return dictionaryv1class.code === identification;
      });
      if (!bsddClass) {
        bsddClass = classes.find((dictionaryv1class) => dictionaryv1class.name === ifcClassificationReference.name);
      }
      if (bsddClass) {
        validationState = 'fixed';
        if (bsddClass?.uri) {
          newReference.location = bsddClass?.uri;
        }
        if (bsddClass?.name) {
          newReference.name = bsddClass?.name;
        }
        if (bsddClass?.code) {
          newReference.identification = bsddClass?.code;
        }
        if (!dictionary) {
          // iterate activeDictionaries, set dictionary to the first one that has the class based on the uri
          for (let i = 0; i < activeDictionaries.length; i++) {
            const result = await dispatch(fetchDictionaryClasses(activeDictionaries[i].dictionaryUri));
            classes = result.payload;
            const dictionaryClasses: ClassListItemContractV1[] = result.payload;
            if (dictionaryClasses.find((dictionaryv1class) => dictionaryv1class.uri === bsddClass?.uri)) {
              const dictionaryUri = activeDictionaries[i].dictionaryUri;
              const dictionaries = getState().bsdd.dictionaries;
              dictionary = dictionaries[dictionaryUri];
              break;
            }
          }
        }

        if (dictionary) {
          const referencedSource = convertBsddDictionaryToIfc(dictionary);
          newReference = { ...ifcClassificationReference, referencedSource };
        }
      }
    }
  }
  return { validationState, newReference };
};
