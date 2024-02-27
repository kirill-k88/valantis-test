import { configureStore } from '@reduxjs/toolkit';

import { isLoadingReducer } from './isloadingSlice';
import { getIdsReducer } from './getProductLits';

export const store = configureStore({
  reducer: {
    isLoadingReducer,
    getIdsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
