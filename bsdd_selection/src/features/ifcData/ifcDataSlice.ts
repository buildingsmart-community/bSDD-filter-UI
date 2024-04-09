import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Association,
  IfcClassification,
  IfcClassificationReference,
  IfcEntity,
} from '../../../../common/src/IfcData/ifc';
import { patchIfcClassificationReference } from '../../../../common/src/IfcData/ifcValidators';
import type { RootState } from '../../app/store';

interface EntitiesState {
  ifcEntities: IfcEntity[];
}

const initialState: EntitiesState = {
  ifcEntities: [],
};

const ifcDataSlice = createSlice({
  name: 'ifcData',
  initialState,
  reducers: {
    setIfcData: (state, action: PayloadAction<IfcEntity[]>) => {
      state.ifcEntities = action.payload;
    },
  },
});

export const selectIfcEntities = (state: RootState) => state.ifcData.ifcEntities;

export const { setIfcData } = ifcDataSlice.actions;

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
  return (type ?? '') + (predefinedType ?? '');
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
    name: 'IFC',
    identification: ifcEntityToBsddClass(ifcEntity.type, ifcEntity.predefinedType),
    referencedSource,
  };
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

        const processedAssociations = (
          await Promise.all(
            associations.map(async (association) => {
              if (association.type === 'IfcClassificationReference') {
                const { validationState, ifcClassificationReference, message } = await patchIfcClassificationReference(
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
          )
        ).filter((association) => association !== null) as Association[];
        return { ...ifcEntity, hasAssociations: processedAssociations };
      }),
    );

    dispatch(setIfcData(validatedIfcEntities));
  },
);

export const ifcDataReducer = ifcDataSlice.reducer;
