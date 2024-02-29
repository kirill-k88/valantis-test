import { Dispatch, FC, SetStateAction } from 'react';

import styles from './PopupFilter.module.scss';

interface IPopupFilter {
  isPopupVisible: boolean;
  setIsPopupVisible: Dispatch<SetStateAction<boolean>>;
}

export const PopupFilter: FC<IPopupFilter> = ({ isPopupVisible, setIsPopupVisible }) => {
  const backgroundClickHandle = () => {
    setIsPopupVisible(false);
  };

  return (
    <div
      className={styles.popupfilter}
      onClick={backgroundClickHandle}>
      <div
        className={`${styles.popupfilter__container} ${
          isPopupVisible && styles.popupfilter__container_active
        }`}></div>
    </div>
  );
};
