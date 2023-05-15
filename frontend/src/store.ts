import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import carsSlice from './features/mainPage/carSlice';

const store = configureStore({
  reducer: {
    carState: carsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
