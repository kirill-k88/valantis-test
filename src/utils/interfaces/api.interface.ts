export interface IGet_ids {
  result: [string];
}

export interface IItem {
  brand: string | null;
  id: string | null;
  price: number | null;
  product: string | null;
}

export interface IGet_items {
  result: [IItem];
}
