import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: null,
};

const LOGIN_URL = 'localhost:3001/api/v1/user/login';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      return response.data;
    } catch (err) {
      console.log('Error');
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSucceeded: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    loginRejected: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { loginPending, loginSucceeded, loginRejected } = actions;

export default reducer;
