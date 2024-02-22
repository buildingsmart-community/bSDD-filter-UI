import { RootState } from '../../../bsdd_selection/src/app/store';
import { fetchDictionaryClasses, selectDictionaryClasses } from '../BsddApi/bsddSlice';
import { IfcClassificationReference } from './ifc';
import { convertBsddDictionaryToIfc } from './ifcBsddConverters';
import { DictionaryClassesResponseContractV1 } from '../BsddApi/BsddApiBase';
import { ClassListItemContractV1 } from '../BsddApi/BsddApiBase';
import { selectActiveDictionaries } from '../settings/settingsSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { BsddDictionary } from './bsddBridgeData';

type ValidationState = 'valid' | 'invalid' | 'fixed';

/**
 * Finds the matching dictionary based in the active dictionaries for bsddClass.
 * 
 * @param activeDictionaries - The array of active dictionaries.
 * @param bsddClass - The bsddClass to match against.
 * @param dispatch - The dispatch function from the Redux store.
 * @returns A Promise that resolves to a DictionaryClassesResponseContractV1 object or null if no matching dictionary is found.
 */
async function findMatchingDictionary(
  activeDictionaries: BsddDictionary[],
  bsddClass: ClassListItemContractV1,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
): Promise<DictionaryClassesResponseContractV1 | null> {
  try {
    for (const activeDictionary of activeDictionaries) {
      const location = activeDictionary.ifcClassification.location;
      if (location) {
        const result = await dispatch(fetchDictionaryClasses(location));
        const dictionaryClasses = result.payload as DictionaryClassesResponseContractV1;
        if (dictionaryClasses.classes?.find((dictionaryv1class) => dictionaryv1class.uri === bsddClass?.uri)) {
          return dictionaryClasses;
        }
      }
    }
  } catch (error) {
    console.error('Failed to find matching dictionary', error);
  }
  return null;
}

export const preprocessIfcClassificationReference = async (
  ifcClassificationReference: IfcClassificationReference,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
  state: RootState,
) => {
  let newReference: IfcClassificationReference = ifcClassificationReference;
  let validationState: ValidationState = 'invalid';
  let dictionary: DictionaryClassesResponseContractV1 | null = null;
  const activeDictionaries = selectActiveDictionaries(state);

  const { location, identification, referencedSource } = ifcClassificationReference;

  let classes: ClassListItemContractV1[] | null | undefined = null;

  if (referencedSource?.location) {
    classes = selectDictionaryClasses(state, referencedSource.location);
    if (!classes) {
      const result = await dispatch(fetchDictionaryClasses(referencedSource.location));
      if (result.payload) {
        classes = result.payload as ClassListItemContractV1[];
      } else {
        console.error('Failed to fetch dictionary classes');
      }
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
          dictionary = await findMatchingDictionary(activeDictionaries, bsddClass, dispatch);
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
