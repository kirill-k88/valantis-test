import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductBrandsFetch } from '../utils/api/api';
import { IGetBrandsReducerSchema } from '../utils/interfaces/slice.interface';
import { getUniqueBrands } from '../utils/functions/productsHelper';

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    let response = await getProductBrandsFetch();
    return getUniqueBrands(response.result);
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

const initialState: IGetBrandsReducerSchema = {
  isGetProductBrandsLoading: false,
  error: null,
  brands: [null]
};

const getProductBrands = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, (state: IGetBrandsReducerSchema) => {
        state.isGetProductBrandsLoading = true;
        state.error = '';
      })
      .addCase(fetchBrands.fulfilled, (state: IGetBrandsReducerSchema, { payload }) => {
        state.isGetProductBrandsLoading = false;
        state.brands = payload;
      })
      .addCase(fetchBrands.rejected, (state: IGetBrandsReducerSchema, { payload }) => {
        state.isGetProductBrandsLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
  }
});

export const getProductBrandsReducer = getProductBrands.reducer;
