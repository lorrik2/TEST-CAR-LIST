import { useState } from 'react';
import { CarsData } from '../features/mainPage/types/Car';
import { useAppDispatch } from '../store';
import { sortCarsData } from '../features/mainPage/carSlice';
import up from './assets/chevron-up-svgrepo-com.svg';
import down from './assets/chevron-down-svgrepo-com.svg';
