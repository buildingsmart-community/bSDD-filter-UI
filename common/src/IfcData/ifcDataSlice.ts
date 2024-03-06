import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../bsdd_selection/src/app/store';
import { Association, IfcEntity } from './ifc';
import { patchIfcClassificationReference } from './ifcValidators';

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
        const { hasAssociations } = ifcEntity;
        if (hasAssociations) {
          const processedAssociations = (
            await Promise.all(
              hasAssociations.map(async (association) => {
                if (association.type === 'IfcClassificationReference') {
                  const { validationState, ifcClassificationReference, message } =
                    await patchIfcClassificationReference(association, dispatch, state);
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
        }
        return ifcEntity;
      }),
    );

    dispatch(setIfcData(validatedIfcEntities));
  },
);

export const ifcDataReducer = ifcDataSlice.reducer;
