import { createSlice } from '@reduxjs/toolkit';

const isFilterdSlice = createSlice({
  name: 'isFilterd',
  initialState: {
    isFilterd: false
  },
  reducers: {
    setIsFilterd(state, action) {
      state.isFilterd = action.payload.isFilterd;
    }
  }
});

export const { setIsFilterd } = isFilterdSlice.actions;

export const isFilterdReducer = isFilterdSlice.reducer;
