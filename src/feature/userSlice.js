import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  status: null,
  error: null,
};

const LOGIN_URL = 'localhost:3001/api/v1/user/login';

export const login = createAsyncThunk('user/login', async () => {
  try {
    const response = await axios.post(LOGIN_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [login.fulfilled]: (state) => {
      state.status = 'succeeded';
      state.isAuth = true;
    },
    [login.pending]: (state) => {
      state.status = 'loading';
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});
export const userSelector = (state) => state.user;
