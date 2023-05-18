import React, { useEffect, useState } from 'react';
import CarsList from './cars/CarsList';
import './styles/main.css';
import chevronDown from './cars/image/chevron-down.svg';
import Map from '../map/Map';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { CarsData } from './types/Car';
import up from './assets/chevron-up-svgrepo-com.svg';
import down from './assets/chevron-down-svgrepo-com.svg';
import { sortCarsData } from './carSlice';

function MainPage(): JSX.Element {
  const [clickSort, setClickSort] = useState('');
  const [sortStatus, setSortStatus] = useState(false);
  const [sortedBy, setSortedBy] = useState('');
  const [icon, setIcon] = useState(down);

  const { carsData } = useSelector((store: RootState) => store.carState);

  const dispatch = useAppDispatch();

  const sortedData = (sortBy: keyof CarsData): any => {
    const copyData = carsData.concat();
    const sortData = copyData.sort((a, b) => {
      return sortStatus ? (a[sortBy] < b[sortBy] ? 1 : -1) : a[sortBy] > b[sortBy] ? 1 : -1;
    });
    dispatch(sortCarsData(sortData));
    setSortedBy(sortBy);
    setSortStatus(!sortStatus);
    setIcon(sortStatus ? down : up);
  };

  return (
    <div className="card mb-5 main-box">
      <div className="row g-0">
        <div className="col-md-4 ">
          <div className="btn-block">
            <p className="m-2">Filter:</p>
            <button
              type="button"
              className="btn m-1 btn-outline-warning btn-top mt-2"
              onClick={() => sortedData('price')}>
              Price
              {sortedBy === 'price' ? (
                <img src={icon} alt="up" height="20px" />
              ) : (
                <img src={down} alt="down" height="20px" />
              )}
            </button>
            <button
              type="button"
              className="btn m-1  btn-outline-warning btn-top mt-2"
              onClick={() => sortedData('year')}>
              Year
              {sortedBy === 'year' ? (
                <img src={icon} alt="up" height="20px" />
              ) : (
                <img src={down} alt="down" height="20px" />
              )}
            </button>
          </div>
          <div className="left-box mb-3">
            <CarsList />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">Location Map</h4>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
