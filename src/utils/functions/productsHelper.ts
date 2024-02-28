import { IItem } from '../interfaces/api.interface';

export const getUniqueProducts = (arr: Array<IItem>) => {
  const uniqueArr: Array<string> = [];
  const uniqueProducts: Array<IItem> = [];
  if (arr.length) {
    arr.forEach(p => {
      if (p.id && !uniqueArr.includes(p.id)) {
        uniqueArr.push(p.id);
        uniqueProducts.push(p);
      }
    });
  }
  return uniqueProducts;
};
