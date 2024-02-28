import { FC } from 'react';
import styles from './ProductCard.module.scss';
import { IItem } from '../../utils/interfaces/api.interface';

interface IProductCardProps {
  product: IItem;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productcard}>
      <h2 className={styles.productcard__brand}>{product.brand || ''}</h2>
      <h2 className={styles.productcard__product}>{product.product || ''}</h2>
      <h2 className={styles.productcard__price}>{`${product.price || ''} `}&#8381;</h2>
    </div>
  );
};
