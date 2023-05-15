import { Car } from './Car';

export type State = {
  carData: Car[];
  error: string | undefined;
};
