import { createSlice } from '@reduxjs/toolkit';
import { getIdsFetch } from '../../utils/Api/api';

const fetchIds = createAsyncThunk('users/fetchByIdStatus', async (userId: number, thunkAPI) => {
  const response = await getIdsFetch();
  console.log(response);
  return response.data;
});

const getProductList = createSlice({
  name: 'getIds',
  ids: [''],
  initialState: {
    isLoading: false,
    ids: ['']
  },
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchIds.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  }
});

export const { setIsLoading } = getProductList.actions;

export const isLoadingReducer = getProductList.reducer;
