import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIdsFetch, getProductsFetch } from '../utils/api/api';
import { IGetProductsReducerSchema } from '../utils/interfaces/slice.interface';

export const fetchIds = createAsyncThunk('ids/fetchIds', async (offset: number, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    let response = await getIdsFetch(offset);
    console.log(response);
    response = await getProductsFetch(response.result);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

export const fetchProducts = createAsyncThunk(
  'ids/fetchProducts',
  async (ids: [string], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await getProductsFetch(ids);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const initialState: IGetProductsReducerSchema = {
  isLoading: false,
  error: '',
  ids: [''],
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
        state.ids = payload.result;
      })
      .addCase(fetchIds.rejected, (state: IGetProductsReducerSchema, { payload }) => {
        state.isLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
    builder
      .addCase(fetchProducts.pending, (state: IGetProductsReducerSchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state: IGetProductsReducerSchema, { payload }) => {
        state.isLoading = false;
        state.products = payload.result;
      })
      .addCase(fetchProducts.rejected, (state: IGetProductsReducerSchema, { payload }) => {
        state.isLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
  }
});

//export const {} = getProductList.actions;

export const getProductsReducer = getProducts.reducer;
