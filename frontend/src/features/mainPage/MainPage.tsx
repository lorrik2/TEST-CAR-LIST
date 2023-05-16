import React from 'react';
import CarsList from './cars/CarsList';
import './styles/main.css';
import chevronDown from './cars/image/chevron-down.svg';
import Map from '../map/Map';

function MainPage(): JSX.Element {
  return (
    <div className="card mb-5 main-box">
      <div className="row g-0">
        <div className="col-md-4 ">
          <div className="btn-block">
            <p className="m-2">Filter:</p>
            <button type="button" className="btn m-1 btn-outline-warning btn-top mt-2">
              Price
              <img src={chevronDown} alt="down" height="20px" />
            </button>
            <button type="button" className="btn m-1  btn-outline-warning btn-top mt-2">
              Year
              <img src={chevronDown} alt="down" height="20px" />
            </button>
          </div>
          <div className="left-box mb-3">
            <CarsList />
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
