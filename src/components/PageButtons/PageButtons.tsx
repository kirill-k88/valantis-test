import { FC, Dispatch, SetStateAction } from 'react';

import styles from './PageButton.module.scss';

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
          className={`${styles.pagebutton__button} ${
            !(curPage > 0) && styles.pagebutton__button_disable
          }`}
          type="button"
          disabled={!(curPage > 0)}
          onClick={prevBtnHandle}
        >
          {'<'}
        </button>

        <p className={styles.pagebutton__text}>{curPage + 1}</p>
        <button className={styles.pagebutton__button} type="button" onClick={nexBtnHandle}>
          {'>'}
        </button>
      </div>
    </div>
  );
};