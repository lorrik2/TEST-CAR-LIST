import React, { useState } from 'react';
import { CarsData } from '../../types/Car';
import { useAppDispatch } from '../../../../store';
import { updateCar } from '../../carSlice';

function FormEdit({
  cars,
  setEditStatus,
}: {
  cars: CarsData;
  setEditStatus: (val: boolean) => void;
}): JSX.Element {
  const [name, setName] = useState(cars.name);
  const [model, setModel] = useState(cars.model);
  const [price, setPrice] = useState(Number(cars.price));
  const [year, setYear] = useState(Number(cars.year));
  const [value, setValue] = useState(cars.color);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const updDataCar = {
      id: cars.id,
      name,
      model,
      price,
      year,
      color: value,
    };

    dispatch(updateCar(updDataCar));
    setEditStatus(false);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="input-group">
        <span className="input-group-text">Car brand and model</span>
        <input
          type="text"
          aria-label="Brand"
          placeholder="brand"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          aria-label="Model"
          placeholder="model"
          className="form-control"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">Price and year</span>
        <input
          type="text"
          aria-label="Price"
          placeholder="car price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="text"
          aria-label="Year"
          placeholder="production year"
          className="form-control"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
      </div>
      <select className="form-select" onChange={(e) => setValue(e.target.value)}>
        <option selected disabled>
          Car colors
        </option>
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="grey">grey</option>
        <option value="yellow">yellow</option>
      </select>
      <button type="submit" className="btn btn-light">
        Edit
      </button>
    </form>
  );
}

export default FormEdit;
