import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Header } from '../Header/Header';
import { AppDispatch, RootStore } from '../../store/store';
import { fetchIds } from '../../store/getProductLits';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';
import { PageButton } from '../PageButtons/PageButtons';
import { Preloader } from '../Preloader/Preloader';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((store: RootStore) => store.getIdsReducer);
  const [curPage, setCurPage] = useState(0);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    dispatch(fetchIds(curPage * PAGINATION_LIMIT));
  }, [curPage]);

  useEffect(() => {
    setShowPreloader(isLoading);
  }, [isLoading]);

  return (
    <div className="App">
      <Header />
      <PageButton
        curPage={curPage}
        setCurPage={setCurPage}
      />
      {showPreloader && <Preloader />}
    </div>
  );
};
