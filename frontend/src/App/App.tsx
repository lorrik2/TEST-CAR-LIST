import React, { useEffect } from 'react';
import './App.css';
import CarsList from '../features/mainPage/cars/CarsList';
import { useAppDispatch } from '../store';
import { getCarData } from '../features/mainPage/carSlice';
import MainPage from '../features/mainPage/MainPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarData());
  }, [dispatch]);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
