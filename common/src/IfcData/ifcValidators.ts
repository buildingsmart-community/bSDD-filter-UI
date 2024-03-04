import { RootState } from '../../../bsdd_selection/src/app/store';
import { fetchDictionaryClasses, selectDictionaryClasses, selectDictionary } from '../BsddApi/bsddSlice';
import { IfcClassificationReference } from './ifc';
import { convertBsddDictionaryToIfcClassification } from './ifcBsddConverters';
import { DictionaryClassesResponseContractV1 } from '../BsddApi/BsddApiBase';
import { ClassListItemContractV1 } from '../BsddApi/BsddApiBase';
import { selectActiveDictionaries } from '../settings/settingsSlice';
import { BsddDictionary } from './bsddBridgeData';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

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
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
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

/**
 * Fetches classes based on the referenced source location.
 * @param {IfcClassificationReference['referencedSource']} referencedSource - The referenced source from the IfcClassificationReference.
 * @param {RootState} state - The current state of the Redux store.
 * @param {AppDispatch} dispatch - The dispatch function from Redux.
 * @returns {Promise<ClassListItemContractV1[] | null>} - The fetched classes or null if fetching fails.
 */
const fetchClasses = async (
  referencedSource: IfcClassificationReference['referencedSource'],
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
): Promise<ClassListItemContractV1[] | null> => {
  if (!referencedSource?.location) return null;

  let classes = selectDictionaryClasses(state, referencedSource.location);
  if (classes) return classes;

  const result = await dispatch(fetchDictionaryClasses(referencedSource.location));
  if (result.payload) {
    return result.payload as ClassListItemContractV1[];
  } else {
    console.error('Failed to fetch dictionary classes');
    return null;
  }
};

/**
 * Finds a bsddClass from the classes based on the IfcClassificationReference.
 * @param {ClassListItemContractV1[] | null} classes - The classes to search in.
 * @param {IfcClassificationReference} ifcReference - The IfcClassificationReference to match.
 * @returns {ClassListItemContractV1 | null} - The found bsddClass or null if no match is found.
 */
const findBsddClass = (
  classes: ClassListItemContractV1[] | null,
  ifcReference: IfcClassificationReference,
): ClassListItemContractV1 | null => {
  if (!classes) return null;

  let bsddClass = classes.find((dictionaryClass) => dictionaryClass.code === ifcReference.identification) || null;
  if (!bsddClass) {
    bsddClass = classes.find((dictionaryClass) => dictionaryClass.name === ifcReference.name) || null;
  }
  return bsddClass;
};

/**
 * Preprocesses an IfcClassificationReference by validating, repairing, and extending it.
 * @param {IfcClassificationReference} ifcReference - The IfcClassificationReference to preprocess.
 * @param {AppDispatch} dispatch - The dispatch function from Redux.
 * @param {RootState} state - The current state of the Redux store.
 * @returns {Promise<{validationState: ValidationState, improvedReference: IfcClassificationReference}>} - The validation state and the possibly improved IfcClassificationReference.
 */
export const preprocessIfcClassificationReference = async (
  ifcReference: IfcClassificationReference,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
  state: RootState,
) => {
  let improvedReference: IfcClassificationReference = ifcReference;
  let validationState: ValidationState = 'invalid';
  let dictionaryWithClasses: DictionaryClassesResponseContractV1 | null = null;
  const activeDictionaries = selectActiveDictionaries(state);

  const classes = await fetchClasses(ifcReference.referencedSource, state, dispatch);
  if (ifcReference.location) {
    validationState = 'valid';
  }
  if (!ifcReference.location && ifcReference.identification && classes) {
    const bsddClass = findBsddClass(classes, ifcReference);
    if (bsddClass) {
      validationState = 'fixed';

      // Create a new object from bsddClass that only includes properties that are not null
      const nonNullBsddClass = Object.fromEntries(Object.entries(bsddClass).filter(([key, value]) => value !== null));

      improvedReference = { ...improvedReference, ...nonNullBsddClass };

      if (!dictionaryWithClasses) {
        dictionaryWithClasses = await findMatchingDictionary(activeDictionaries, bsddClass, dispatch);
      }

      if (dictionaryWithClasses) {
        const referencedSource = convertBsddDictionaryToIfcClassification(dictionaryWithClasses);
        improvedReference = { ...ifcReference, referencedSource };
      }
    }
  }
  return { validationState, improvedReference };
};

type ValidationResult = {
  ifcClassificationReference: IfcClassificationReference;
  validationState: ValidationState;
  message: string | null;
};

function findMatchedClass(
  ifcClassificationReference: IfcClassificationReference,
  classes: ClassListItemContractV1[],
): ClassListItemContractV1 | undefined {
  if (ifcClassificationReference.identification) {
    return classes.find((dictionaryClass) => dictionaryClass.code === ifcClassificationReference.identification);
  }
  return classes.find((dictionaryClass) => dictionaryClass.name === ifcClassificationReference.name);
}

function handleError(message: string, ifcClassificationReference: IfcClassificationReference): ValidationResult {
  console.error(message);
  return { ifcClassificationReference, validationState: 'invalid', message };
}

export async function patchIfcClassificationReference(
  ifcClassificationReference: IfcClassificationReference,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
  state: RootState,
): Promise<ValidationResult> {
  if (ifcClassificationReference.location) {
    // TODO: when the location is set we can further improve the IfcClassificationReference
    return { ifcClassificationReference, validationState: 'valid', message: 'Location is already set' };
  }

  if (!ifcClassificationReference.referencedSource || !ifcClassificationReference.referencedSource.location) {
    return handleError(
      'Cannot patch IfcClassificationReference: missing referencedSource or its location',
      ifcClassificationReference,
    );
  }

  const classes = await fetchClasses(ifcClassificationReference.referencedSource, state, dispatch);
  if (!classes) {
    return handleError('Failed to fetch classes for the referencedSource location', ifcClassificationReference);
  }

  const matchedClass = findMatchedClass(ifcClassificationReference, classes);
  if (!matchedClass) {
    return handleError(
      'Failed to find a match for the IfcClassificationReference name or code in the classes',
      ifcClassificationReference,
    );
  }

  if (!matchedClass.uri) {
    return handleError('Failed to find a URI for the matched class', ifcClassificationReference);
  }

  const { uri, code, name } = matchedClass;

  ifcClassificationReference = {
    ...ifcClassificationReference,
    location: uri ?? undefined,
    identification: code ?? undefined,
    name: name ?? undefined,
  };

  if (!ifcClassificationReference.referencedSource || !ifcClassificationReference.referencedSource.location) {
    return handleError('referencedSource or its location is missing', ifcClassificationReference);
  }

  const bsddDictionary = selectDictionary(state, ifcClassificationReference.referencedSource.location);
  if (!bsddDictionary) {
    return handleError('Failed to find a matching dictionary for the matched class', ifcClassificationReference);
  }

  ifcClassificationReference.referencedSource = convertBsddDictionaryToIfcClassification(bsddDictionary);

  return {
    ifcClassificationReference,
    validationState: 'fixed',
    message: null,
  };
}
