import { IGetProductBrands, IItem } from '../interfaces/api.interface';

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

export const getUniqueBrands = (allBrends: IGetProductBrands) => {
  const brandsSet = new Set(allBrends);
  return Array.from(brandsSet);
};

export const getUniqueProductList = (
  curPList: Array<IItem>,
  newPList: Array<IItem>
): Array<IItem> => {
  const uniqueArr: Array<IItem> = [];

  const ids: Array<string> = [];

  curPList.forEach(p => {
    p.id && ids.push(p.id);
  });

  newPList.forEach(p => {
    if (p.id && !ids.includes(p.id)) {
      ids.push(p.id);
      uniqueArr.push(p);
    }
  });

  return uniqueArr;
};
