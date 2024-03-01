import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFiltredProductsFetch, getIdsFetch, getProductsFetch } from '../utils/api/api';
import { IGetProductsReducerSchema } from '../utils/interfaces/slice.interface';
import { getUniqueProductList, getUniqueProducts } from '../utils/functions/productsHelper';
import { IfilterList } from '../utils/interfaces/api.interface';

interface IfetchIdsParams {
  offset: number;
}

interface IfetchFiltredProductsParams {
  filter: IfilterList;
}

export const fetchIds = createAsyncThunk(
  'ids/fetchIds',
  async (params: IfetchIdsParams, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await getIdsFetch(params.offset);

      response = await getProductsFetch(response.result);

      return { result: response.result, offset: params.offset };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const fetchFiltredProducts = createAsyncThunk(
  'ids/fetchFiltredProducts',
  async (params: IfetchFiltredProductsParams, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let response = await getFiltredProductsFetch(params.filter);

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
        const unqueProductList =
          payload.offset > 0
            ? getUniqueProductList(state.products, payload.result)
            : getUniqueProducts(payload.result);
        state.products =
          payload.offset > 0 ? [...state.products, ...unqueProductList] : unqueProductList;
      })
      .addCase(fetchIds.rejected, (state: IGetProductsReducerSchema, { payload }) => {
        state.isGetProductsLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
    builder
      .addCase(fetchFiltredProducts.pending, (state: IGetProductsReducerSchema) => {
        state.isGetProductsLoading = true;
        state.error = '';
      })
      .addCase(fetchFiltredProducts.fulfilled, (state: IGetProductsReducerSchema, { payload }) => {
        state.isGetProductsLoading = false;
        const unqueProductList = getUniqueProducts(payload);
        state.products = unqueProductList;
      })
      .addCase(fetchFiltredProducts.rejected, (state: IGetProductsReducerSchema, { payload }) => {
        state.isGetProductsLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
  }
});

export const getProductsReducer = getProducts.reducer;
