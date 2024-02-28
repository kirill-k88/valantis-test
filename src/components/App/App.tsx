import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Header } from '../Header/Header';
import { AppDispatch, RootStore } from '../../store/store';
import { fetchIds } from '../../store/getProductLits';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';
import { PageButton } from '../PageButtons/PageButtons';
import { Preloader } from '../Preloader/Preloader';
import { ProductsGrid } from '../ProductsGrid/ProductsGrid';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, products } = useSelector((store: RootStore) => store.getProductsReducer);
  const [curPage, setCurPage] = useState(0);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (curPage > pages) {
      if (!isLoading) {
        dispatch(fetchIds(curPage * PAGINATION_LIMIT));
      }
      setPages(curPage);
    }
  }, [curPage]);

  useEffect(() => {
    dispatch(fetchIds(curPage * PAGINATION_LIMIT));
  }, []);

  return (
    <div className="App">
      <Header />
      <PageButton curPage={curPage} setCurPage={setCurPage} />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ProductsGrid curPage={curPage} products={products} />{' '}
          <PageButton curPage={curPage} setCurPage={setCurPage} />
        </>
      )}
    </div>
  );
};
