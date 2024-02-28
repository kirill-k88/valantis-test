import { FC, Dispatch, SetStateAction } from 'react';

import styles from './PageButton.module.scss';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';

interface IPageButtonProps {
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
}

export const PageButton: FC<IPageButtonProps> = ({ curPage, setCurPage }) => {
  return (
    <div className={styles.pagebutton}>
      <div className={styles.pagebutton__btnwrapper}>
        <button className={styles.pagebutton__button}>{'<'}</button>
        <p className={styles.pagebutton__text}>{curPage * PAGINATION_LIMIT}</p>
        <button className={styles.pagebutton__button}>{'>'}</button>
      </div>
    </div>
  );
};
