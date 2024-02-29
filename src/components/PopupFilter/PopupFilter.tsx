import { Dispatch, FC, SetStateAction } from 'react';

import styles from './PopupFilter.module.scss';
import { FilterForm } from '../FilterForm/FilterForm';

interface IPopupFilter {
  isPopupVisible: boolean;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
}

export const PopupFilter: FC<IPopupFilter> = ({ isPopupVisible, setIsPopupVisible }) => {
  const backgroundClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsPopupVisible(false);
  };

  return (
    <div
      className={`${styles.popupfilter} ${isPopupVisible && styles.popupfilter_active}`}
      onClick={backgroundClickHandle}>
      <div
        className={`${styles.popupfilter__container} ${
          isPopupVisible && styles.popupfilter__container_active
        }`}>
        <FilterForm />
      </div>
    </div>
  );
};
