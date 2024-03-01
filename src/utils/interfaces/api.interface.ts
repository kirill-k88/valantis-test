export interface IGet_ids {
  result: Array<string>;
}

export interface IItem {
  brand: string | null;
  id: string | null;
  price: number | null;
  product: string | null;
}

export interface IGet_items {
  result: Array<IItem>;
}

export type IGetProductBrands = Array<string | null>;

export interface IfilterList {
  price?: number;
  brand?: string;
  product?: string;
}
