import React, { useState } from 'react';
import { Car, CarsData } from '../types/Car';
import './style/cars.css';
import trash from './image/trash.svg';
import edit from './image/edit.svg';
import { useAppDispatch } from '../../../store';
import { removeCar } from '../carSlice';
import FormEdit from './forms/FormEdit';

function CarElement({ cars }: { cars: CarsData }): JSX.Element {
  const [editStaus, setEditStatus] = useState(false);
  const dispatch = useAppDispatch();
  const onHandleClickRemove = (): void => {
    dispatch(removeCar(cars.id));
  };
  const onHandleClickEdit = (): void => {
    setEditStatus((prev) => !prev);
  };
  return (
    <div className="card mt-2 car-container">
      <div className="card-header bg-warning">
        <img src={trash} alt="trash" height="20px" onClick={onHandleClickRemove} />
        <img src={edit} alt="edit" height="20px" onClick={onHandleClickEdit} />
      </div>
      {editStaus ? (
        <FormEdit setEditStatus={setEditStatus} cars={cars} />
      ) : (
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
              <strong id="color-text"> {cars.color}</strong>
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default CarElement;
