import { FC, useMemo } from 'react';
import styles from './ProductsGrid.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { IItem } from '../../utils/interfaces/api.interface';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';

interface IProductsGrid {
  curPage: number;
  products: IItem[];
}

export const ProductsGrid: FC<IProductsGrid> = ({ curPage, products }) => {
  const getProductsCards = useMemo(() => {
    const pList = products.slice(curPage, curPage + PAGINATION_LIMIT);

    return pList.map(p => p.id && <ProductCard key={p.id} product={p} />);
  }, [products, curPage]);

  return <section className={styles.productgrid}>{getProductsCards}</section>;
};
