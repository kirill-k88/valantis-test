import { useEffect } from 'react';
import { Header } from '../Header/Header';
import './App.css';
import { useDispatch } from 'react-redux';
import { RootStore, AppDispatch } from '../../store/store';
import { fetchIds } from '../../store/getProductLits';

export function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchIds());
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}
