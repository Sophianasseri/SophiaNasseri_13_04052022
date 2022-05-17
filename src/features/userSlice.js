import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  status: 'idle',
  error: null,
  firstName: null,
  lastName: null,
  token: null,
};

const LOGIN_URL = 'http://localhost:3001/api/v1/user/login';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log('Error', err);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = 'true';
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
