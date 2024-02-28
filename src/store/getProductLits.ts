import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIdsFetch, getProductsFetch } from '../utils/api/api';
import { IGetProductsReducerSchema } from '../utils/interfaces/slice.interface';
import { IItem } from '../utils/interfaces/api.interface';
import { getUniqueProducts } from '../utils/functions/productsHelper';

export const fetchIds = createAsyncThunk('ids/fetchIds', async (offset: number, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    let response = await getIdsFetch(offset);
    console.log(response);
    response = await getProductsFetch(response.result);
    console.log(response);
    const uniqueProducts = getUniqueProducts(response.result);
    console.log('uniqueProducts', uniqueProducts);
    return uniqueProducts;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

const initialState: IGetProductsReducerSchema = {
  isLoading: false,
  error: '',
  products: [
    {
      brand: null,
      id: '',
      price: 0,
      product: ''
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
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchIds.fulfilled, (state: IGetProductsReducerSchema, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(fetchIds.rejected, (state: IGetProductsReducerSchema, { payload }) => {
        state.isLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
  }
});

export const getProductsReducer = getProducts.reducer;
