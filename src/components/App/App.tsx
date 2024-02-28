import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { Header } from '../Header/Header';
import { AppDispatch, RootStore } from '../../store/store';
import { fetchIds } from '../../store/getProductLits';
import { PAGINATION_LIMIT } from '../../utils/constants/constants';
import { PageButton } from '../PageButtons/PageButtons';
import { Preloader } from '../Preloader/Preloader';
import { ProductCard } from '../ProductCard/ProductCard';

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, products } = useSelector((store: RootStore) => store.getProductsReducer);
  const [curPage, setCurPage] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchIds(curPage * PAGINATION_LIMIT));
    }
  }, [curPage]);

  return (
    <div className="App">
      <Header />
      <PageButton
        curPage={curPage}
        setCurPage={setCurPage}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))
      )}
    </div>
  );
};
