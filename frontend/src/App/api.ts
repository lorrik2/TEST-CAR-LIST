import { Car } from '../features/mainPage/types/Car';

export const getCarData = async (): Promise<Car[]> =>
  fetch(`https://test.tspb.su/test-task/vehicles`).then((res) => res.json());
