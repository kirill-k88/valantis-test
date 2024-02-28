import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { Header } from '../Header/Header';
import { AppDispatch } from '../../store/store';
import { fetchIds } from '../../store/getProductLits';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';
import { PageButton } from '../PageButtons/PageButtons';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    dispatch(fetchIds(curPage * PAGINATION_LIMIT));
  }, [curPage]);

  return (
    <div className="App">
      <Header />
      <PageButton
        curPage={curPage}
        setCurPage={setCurPage}
      />
    </div>
  );
};
