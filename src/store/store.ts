import { configureStore } from '@reduxjs/toolkit';

import { isLoadingReducer } from './isloadingSlice';

export const store = configureStore({
  reducer: {
    isLoadingReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootStore = ReturnType<typeof store.getState>;
