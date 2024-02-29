import { IItem } from './api.interface';

export interface IGetProductsReducerSchema {
  isGetProductsLoading: boolean;
  error: string | null;
  products: Array<IItem>;
}

export interface IIsLoading {
  isLoading: boolean;
}

export interface IGetBrandsReducerSchema {
  isGetProductBrandsLoading: boolean;
  error: string | null;
  brands: Array<string | null>;
}

export interface IparamList {
  price?: number;
  brand?: string;
  product?: string;
}
