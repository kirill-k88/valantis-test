import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIdsFetch } from '../utils/api/api';
import { IGet_ids } from '../utils/interfaces/api.interface';
import { IGetIdsSchema } from '../utils/interfaces/slice.interface';

export const fetchIds = createAsyncThunk('ids/fetchIds', async (offset: number, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await getIdsFetch(offset);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

const initialState: IGetIdsSchema = {
  isLoading: false,
  error: '',
  ids: ['']
};

const getIds = createSlice({
  name: 'ids',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIds.pending, (state: IGetIdsSchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchIds.fulfilled, (state: IGetIdsSchema, { payload }) => {
        state.isLoading = false;
        state.ids = payload.result;
      })
      .addCase(fetchIds.rejected, (state: IGetIdsSchema, { payload }) => {
        state.isLoading = false;
        state.error = 'Ошибка запроса' + payload;
      });
  }
});

//export const {} = getProductList.actions;

export const getIdsReducer = getIds.reducer;
