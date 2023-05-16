import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { Car, CarsData } from '../mainPage/types/Car';

const containerStyle = {
  width: '1042px',
  height: '795px',
};

const center = {
  lat: 59.93428,
  lng: 30.3351,
};

const defaultOptions = {
  panControl: true,
  mapTypeControl: false,
  zoomControl: true,
  scaleControl: false,
  streetViewControl: true,
  rotateControl: false,
  clickableIcons: true,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};

const API_KEY = process.env.REACT_APP_API_KEY;

type Add = {
  address: {
    lat: number;
    lng: number;
  };
};

function Map(): JSX.Element {
  const [data, setData] = useState<Car[]>([]);
  const [res, setRes] = useState<{ lat: number; lng: number }[]>();
  const dispatch = useAppDispatch();
  const mapRef = useRef(undefined);
  const { carsData } = useSelector((store: RootState) => store.carState);

  useEffect(() => {
    setData(carsData);
  }, [carsData]);

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);
  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(API_KEY),
  });

  //s

  console.log(carsData[0].latitude, 'wtf');

  return isLoaded ? (
    <div className="mt-3">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}>
        {carsData?.map((place, inx) => (
          <Marker
            key={place.id + inx}
            position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}></Marker>
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Map;
