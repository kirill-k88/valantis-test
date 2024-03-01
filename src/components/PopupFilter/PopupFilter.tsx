import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import styles from './PopupFilter.module.scss';
import { FilterForm } from '../FilterForm/FilterForm';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store/store';

interface IPopupFilterProps {
  isPopupVisible: boolean;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
  setCurPage: Dispatch<SetStateAction<number>>;
}

export const PopupFilter: FC<IPopupFilterProps> = ({
  isPopupVisible,
  setIsPopupVisible,
  setCurPage
}) => {
  const { isGetProductsLoading } = useSelector((store: RootStore) => store.getProductsReducer);

  useEffect(() => {
    if (isGetProductsLoading) {
      setIsPopupVisible(false);
    }
  }, [isGetProductsLoading]);

  const closeClickHandle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsPopupVisible(false);
  };

  const backgroundClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsPopupVisible(false);
  };

  const popupClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.popupfilter} ${isPopupVisible && styles.popupfilter_active}`}
      onClick={backgroundClickHandle}>
      <div
        className={`${styles.popupfilter__container} ${
          isPopupVisible && styles.popupfilter__container_active
        }`}
        onClick={popupClickHandle}>
        <button
          className={styles.popupfilter__closebtn}
          onClick={closeClickHandle}>
          x
        </button>
        <FilterForm setCurPage={setCurPage} />
      </div>
    </div>
  );
};
