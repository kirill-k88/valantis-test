import { IItem } from './api.interface';

export interface IGetProductsReducerSchema {
  isLoading: boolean;
  error: string;
  products: Array<IItem>;
}

export interface IIsLoading {
  isLoading: boolean;
}
