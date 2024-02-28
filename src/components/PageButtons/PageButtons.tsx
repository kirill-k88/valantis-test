import { FC, Dispatch, SetStateAction } from 'react';

import styles from './PageButton.module.scss';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';

interface IPageButtonProps {
  curPage: number;
  setCurPage: Dispatch<SetStateAction<number>>;
}

export const PageButton: FC<IPageButtonProps> = ({ curPage, setCurPage }) => {
  const prevBtnHandle = () => {
    if (curPage > 0) {
      setCurPage(curVal => curVal - 1);
    }
  };

  const nexBtnHandle = () => {
    setCurPage(curVal => curVal + 1);
  };

  return (
    <div className={styles.pagebutton}>
      <div className={styles.pagebutton__btnwrapper}>
        <button
          className={styles.pagebutton__button}
          type="button"
          disabled={!(curPage > 0)}
          onClick={prevBtnHandle}>
          {'<'}
        </button>

        <p className={styles.pagebutton__text}>{curPage}</p>
        <button
          className={styles.pagebutton__button}
          type="button"
          onClick={nexBtnHandle}>
          {'>'}
        </button>
      </div>
    </div>
  );
};
