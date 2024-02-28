import { configureStore } from '@reduxjs/toolkit';

import { isLoadingReducer } from './isloadingSlice';
import { getProductsReducer } from './getProductLits';

export const store = configureStore({
  reducer: {
    isLoadingReducer,
    getProductsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
