import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import { Association, IfcClassification, IfcClassificationReference, IfcEntity } from '../IfcData/ifc';
import { patchIfcClassificationReference } from '../IfcData/ifcValidators';

interface EntitiesState {
  loadedIfcEntities: IfcEntity[];
}

const initialState: EntitiesState = {
  loadedIfcEntities: [],
};

const ifcDataSlice = createSlice({
  name: 'ifcData',
  initialState,
  reducers: {
    setLoadedIfcEntities: (state, action: PayloadAction<IfcEntity[]>) => {
      state.loadedIfcEntities = action.payload;
    },
  },
});

export const { setLoadedIfcEntities } = ifcDataSlice.actions;

export const selectIfcEntities = (state: RootState) => state.ifcData.loadedIfcEntities;

/**
 * Converts an IFC entity name to its corresponding IfcTypeProduct name, even if it is an IfcProduct.
 *
 * @param ifcEntity - The IFC entity name to convert.
 * @returns The corresponding IfcTypeProduct name.
 */
function ifcEntityAsType(ifcEntity: string) {
  return ifcEntity.endsWith('Type') ? ifcEntity.slice(0, -4) : ifcEntity;
}

/**
 * Converts an IFC entity name to its corresponding IfcProduct name, even if it is an IfcTypeProduct.
 *
 * @param ifcEntity - The IFC entity name to convert.
 * @returns The corresponding IfcProduct name.
 */
function ifcEntityAsInstance(ifcEntity: string) {
  return ifcEntity.endsWith('Type') ? ifcEntity : `${ifcEntity}Type`;
}

/**
 * Converts the given `type` and `predefinedType` into the bSDD IFC dictionary code.
 *
 * @param type - The type of the entity.
 * @param predefinedType - The predefined type of the entity.
 * @returns The concatenated string of `type` and `predefinedType`.
 */
function ifcEntityToBsddClass(type: string | undefined, predefinedType: string | undefined): string {
  const validPredefinedType = predefinedType !== 'NOTDEFINED' && predefinedType !== 'USERDEFINED' ? predefinedType : '';
  return (type ?? '') + (validPredefinedType ?? '');
}

/**
 * Creates an IfcClassificationReference object based on the provided parameters.
 * @param ifcEntity - The IfcEntity object.
 * @param referencedSource - The IfcClassification object or undefined.
 * @returns The created IfcClassificationReference object.
 */
function bsddIfcClassification(
  ifcEntity: IfcEntity,
  referencedSource: IfcClassification | undefined,
): IfcClassificationReference {
  return {
    type: 'IfcClassificationReference',
    identification: ifcEntityToBsddClass(ifcEntity.type, ifcEntity.predefinedType),
    referencedSource,
  };
}

// Helper function to process associations
async function processAssociations(
  associations: Association[],
  dispatch: any,
  state: RootState,
): Promise<Association[]> {
  const processedAssociations = await Promise.all(
    associations.map(async (association) => {
      if (association.type === 'IfcClassificationReference') {
        const { ifcClassificationReference, validationState, message } = await patchIfcClassificationReference(
          association,
          dispatch,
          state,
        );
        if (validationState === 'invalid') {
          return null;
        }
        return ifcClassificationReference;
      }
      return association;
    }),
  );
  return processedAssociations.filter((association) => association !== null) as Association[];
}

/**
 * Sets the validated IFC data by chanking and fixing the associations of each IFC entity.
 *
 * @param ifcEntities - The array of IFC entities to be validated.
 * @param dispatch - The Redux dispatch function.
 * @param getState - The Redux getState function.
 * @returns A Promise that resolves to void.
 */
export const setValidatedIfcData = createAsyncThunk(
  'ifcData/setValidated',
  async (ifcEntities: IfcEntity[], { dispatch, getState }) => {
    const state = getState() as RootState;

    const validatedIfcEntities: IfcEntity[] = await Promise.all(
      ifcEntities.map(async (ifcEntity) => {
        if (ifcEntity.type) {
          ifcEntity.type = ifcEntityAsType(ifcEntity.type);
        }

        const associations: Association[] = [
          ...(ifcEntity.hasAssociations || []),
          bsddIfcClassification(ifcEntity, state.settings.ifcDictionary?.ifcClassification),
        ];

        const processedAssociations = await processAssociations(associations, dispatch, state);

        return { ...ifcEntity, hasAssociations: processedAssociations };
      }),
    );

    dispatch(setLoadedIfcEntities(validatedIfcEntities));
  },
);

export const selectLoadedIfcEntity = createSelector(selectIfcEntities, (ifcEntities) => ifcEntities[0]);

export const ifcDataReducer = ifcDataSlice.reducer;
