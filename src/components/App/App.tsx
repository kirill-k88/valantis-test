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
import { fetchBrands } from '../../store/getProductBrands';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isGetProductsLoading, products } = useSelector(
    (store: RootStore) => store.getProductsReducer
  );
  const { isGetProductBrandsLoading, brands } = useSelector(
    (store: RootStore) => store.getProductBrandsReducer
  );
  const [curPage, setCurPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isGetProductsLoading || isGetProductBrandsLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isGetProductsLoading, isGetProductBrandsLoading]);

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
    dispatch(fetchBrands());
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <PageButton
            curPage={curPage}
            setCurPage={setCurPage}
          />
          <ProductsGrid
            curPage={curPage}
            products={products}
          />{' '}
          <PageButton
            curPage={curPage}
            setCurPage={setCurPage}
          />
        </>
      )}
    </div>
  );
};
