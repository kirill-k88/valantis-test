import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFiltredProductsFetch, getIdsFetch, getProductsFetch } from '../utils/api/api';
import { IGetProductsReducerSchema, IparamList } from '../utils/interfaces/slice.interface';
import { getUniqueProductList, getUniqueProducts } from '../utils/functions/productsHelper';

interface IfetchIdsParams {
  offset: number;
  isFilterd: boolean;
  filter?: IparamList;
}

export const fetchIds = createAsyncThunk(
  'ids/fetchIds',
  async (params: IfetchIdsParams, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = params.isFilterd
        ? await getFiltredProductsFetch(params.filter)
        : await getIdsFetch(params.offset);

      response = await getProductsFetch(response.result);

      return response.result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const initialState: IGetProductsReducerSchema = {
  isGetProductsLoading: false,
  error: null,
  products: [
    {
      brand: null,
      id: null,
      price: null,
      product: null
    }
  ]
};

const getProducts = createSlice({
  name: 'ids',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIds.pending, (state: IGetProductsReducerSchema) => {
        state.isGetProductsLoading = true;
        state.error = '';
      })
      .addCase(fetchIds.fulfilled, (state: IGetProductsReducerSchema, { payload }) => {
        state.isGetProductsLoading = false;
        const unqueProductList = getUniqueProductList(state.products, payload);
        state.products =
          state.products.length > 1 ? [...state.products, ...unqueProductList] : unqueProductList;
      })
      .addCase(fetchIds.rejected, (state: IGetProductsReducerSchema, { payload }) => {
        state.isGetProductsLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
  }
});

export const getProductsReducer = getProducts.reducer;
