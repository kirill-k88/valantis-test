import { IItem } from './api.interface';

export interface IGetProductsReducerSchema {
  isLoading: boolean;
  error: string | null;
  products: Array<IItem>;
}

export interface IIsLoading {
  isLoading: boolean;
}
