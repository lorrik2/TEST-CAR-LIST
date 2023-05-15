import React from 'react';
import CarElement from './CarElement';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

function CarsList(): JSX.Element {
  const { carsData } = useSelector((store: RootState) => store.carState);

  return (
    <div>
      {carsData?.map((cars) => (
        <CarElement key={cars.id} cars={cars} />
      ))}
    </div>
  );
}

export default CarsList;
