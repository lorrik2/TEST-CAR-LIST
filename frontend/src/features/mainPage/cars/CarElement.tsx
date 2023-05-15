import React from 'react';
import { Car, CarsData } from '../types/Car';
import './style/cars.css';
import trash from './image/trash.svg';
import edit from './image/edit.svg';

function CarElement({ cars }: { cars: CarsData }): JSX.Element {
  return (
    <div className="card mt-2 car-container">
      <div className="card-header bg-warning">
        <img src={trash} alt="trash" height="20px" />
        <img src={edit} alt="edit" height="20px" />
      </div>
      <div className="card-body bg-warning-subtle">
        <h5 className="card-title cars-item ">
          {cars.name} {cars.model}
        </h5>
        <p className="card-text cars-item ">
          Price: <strong>{cars.price} $</strong>
        </p>
        <p className="card-text cars-item ">
          Year: <strong>{cars.year}</strong>
        </p>
        <p className="card-text cars-item ">
          Color:
          <span style={{ color: `${cars.color}` }}>
            <strong>{cars.color}</strong>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CarElement;
