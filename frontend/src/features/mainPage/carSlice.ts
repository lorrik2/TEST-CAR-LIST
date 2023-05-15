import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../../App/api';

const initialState: State = {
  carsData: [],
  error: undefined,
};

export const getCarData = createAsyncThunk('carList/getCarData', () => api.getCarData());

const carsSlice = createSlice({
  name: 'carList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarData.fulfilled, (state, action) => {
        state.carsData = action.payload;
      })
      .addCase(getCarData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
