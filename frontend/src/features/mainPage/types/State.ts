import { Car } from './Car';

export type State = {
  carsData: Car[];
  error: string | undefined;
};
