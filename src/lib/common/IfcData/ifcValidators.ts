import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../app/store';
import { ClassListItemContractV1, DictionaryClassesResponseContractV1 } from '../BsddApi/BsddApiBase';
import { fetchDictionaryClasses, getDictionary, selectDictionary, selectDictionaryClasses } from '../slices/bsddSlice';
import { BsddDictionary } from './bsddBridgeData';
import { IfcClassification, IfcClassificationReference } from './ifc';
import { convertBsddDictionaryToIfcClassification } from './ifcBsddConverters';

type ValidationState = 'valid' | 'invalid' | 'fixed';

type ValidationResult = {
  ifcClassificationReference: IfcClassificationReference;
  validationState: ValidationState;
  message: string | null;
};

/**
 * Fetches classes based on the referenced source location.
 * @param {IfcClassificationReference['referencedSource']} referencedSource - The referenced source from the IfcClassificationReference.
 * @param {RootState} state - The current state of the Redux store.
 * @param {AppDispatch} dispatch - The dispatch function from Redux.
 * @returns {Promise<ClassListItemContractV1[] | null>} - The fetched classes or null if fetching fails.
 */
const fetchBsddClasses = async (
  ifcClassificationReference: IfcClassificationReference,
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
): Promise<ClassListItemContractV1[] | null> => {
  const { referencedSource } = ifcClassificationReference;

  const location = referencedSource?.location ?? ifcClassificationReference.location; // hacky catch to search for IfcClassification.location in referencedSource.location if it is missing
  if (!location) return null;

  const classes = selectDictionaryClasses(state, location);
  if (classes) return classes;

  const result = await dispatch(fetchDictionaryClasses(location));
  if (result.payload) {
    return result.payload as ClassListItemContractV1[];
  }
  console.error('Failed to fetch dictionary classes');
  return null;
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

  let bsddClass =
    classes.find(
      (dictionaryClass) => dictionaryClass.code?.toUpperCase() === ifcReference.identification?.toUpperCase(),
    ) || null;

  if (!bsddClass) {
    bsddClass =
      classes.find((dictionaryClass) => dictionaryClass.name?.toUpperCase() === ifcReference.name?.toUpperCase()) ||
      null;
  }
  return bsddClass;
};

/**
 * Finds a matched class based on the given IfcClassificationReference.
 *
 * @param ifcClassificationReference - The IfcClassificationReference to match against.
 * @param classes - The array of ClassListItemContractV1 objects to search in.
 * @returns The matched ClassListItemContractV1 object, if found. Otherwise, undefined.
 */
function findMatchedClass(
  ifcClassificationReference: IfcClassificationReference,
  classes: ClassListItemContractV1[],
): ClassListItemContractV1 | undefined {
  if (ifcClassificationReference.identification) {
    return classes.find(
      (dictionaryClass) =>
        dictionaryClass.code?.toUpperCase() === ifcClassificationReference.identification?.toUpperCase(),
    );
  }
  return classes.find(
    (dictionaryClass) => dictionaryClass.name?.toUpperCase() === ifcClassificationReference.name?.toUpperCase(),
  );
}

/**
 * Handles an error by logging the error message and returning a ValidationResult object.
 * @param message - The error message to be logged.
 * @param ifcClassificationReference - The IfcClassificationReference object associated with the error.
 * @returns A ValidationResult object with the error details.
 */
function handleError(message: string, ifcClassificationReference: IfcClassificationReference): ValidationResult {
  console.error(message);
  return { ifcClassificationReference, validationState: 'invalid', message };
}

/**
 * Patches the IfcClassificationReference by setting the location and other properties based on the referenced source.
 * @param ifcClassificationReference - The IfcClassificationReference object to be patched.
 * @param dispatch - The dispatch function from the Redux Thunk middleware.
 * @param state - The RootState object from the Redux store.
 * @returns A Promise that resolves to a ValidationResult object.
 */
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

  const classes = await fetchBsddClasses(ifcClassificationReference, state, dispatch);
  if (!classes) {
    return handleError('Failed to fetch classes for the referencedSource location', ifcClassificationReference);
  }

  const matchedClass = findMatchedClass(ifcClassificationReference, classes);
  if (!matchedClass) {
    return handleError(
      'Failed to find a match for the IfcClassificationReference code or name in the classes',
      ifcClassificationReference,
    );
  }

  if (!matchedClass.uri) {
    return handleError('Failed to find a URI for the matched class', ifcClassificationReference);
  }

  const { uri, code, name } = matchedClass;

  const newIfcClassificationReference: IfcClassificationReference = {
    ...ifcClassificationReference,
    location: uri ?? undefined,
    identification: code ?? undefined,
    name: name ?? undefined,
  };

  if (!newIfcClassificationReference.referencedSource || !newIfcClassificationReference.referencedSource.location) {
    return handleError('referencedSource or its location is missing', newIfcClassificationReference);
  }

  const bsddDictionary = selectDictionary(state, newIfcClassificationReference.referencedSource.location);
  if (!bsddDictionary) {
    return handleError('Failed to find a matching dictionary for the matched class', newIfcClassificationReference);
  }

  newIfcClassificationReference.referencedSource = convertBsddDictionaryToIfcClassification(bsddDictionary);

  return {
    ifcClassificationReference: newIfcClassificationReference,
    validationState: 'fixed',
    message: null,
  };
}

/**
 * Validates the bsddDictionary IfcClassification. If valid, returns a new object with parameterMapping and IfcClassification.
 * If the bsddDictionary or the ifcClassification location is null, returns null.
 *
 * @param state - The RootState object.
 * @param bsddDictionary - The BsddDictionary object to validate.
 * @returns A new BsddDictionary object or null.
 */
export async function validateDictionary(
  state: RootState,
  dispatch: AppDispatch,
  bsddDictionary: BsddDictionary | null,
): Promise<BsddDictionary | null> {
  if (!bsddDictionary?.ifcClassification.location) return null;
  const dictionary = await getDictionary(state, dispatch, bsddDictionary.ifcClassification.location);
  if (!dictionary) return null;

  const ifcClassification = convertBsddDictionaryToIfcClassification(dictionary);

  return {
    parameterMapping: bsddDictionary.parameterMapping,
    ifcClassification,
  };
}
