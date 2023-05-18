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
  reducers: {
    sortCarsData: (state, action) => {
      state.carsData = action.payload;
    },
    removeCar: (state, action) => {
      if (Number.isNaN(+action.payload)) {
        state.error = `${action.payload}`;
      }
      state.carsData = state.carsData.filter((car) => car.id !== +action.payload);
    },
    updateCar: (state, action) => {
      state.carsData = state.carsData.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
    },
  },
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

export const { sortCarsData, removeCar, updateCar } = carsSlice.actions;

export default carsSlice.reducer;
