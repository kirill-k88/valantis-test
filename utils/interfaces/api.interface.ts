export interface IGet_ids {
  result: [string];
}

interface IItem {
  brand: string | null;
  id: string;
  price: number;
  product: string;
}

export interface IGet_items {
  result: [IItem];
}
