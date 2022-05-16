import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuth: false,
  isLoading: false,
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
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSucceeded: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
      state.token = null;
    },
    loginRejected: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { loginPending, loginSucceeded, loginRejected } =
  userSlice.actions;

export default userSlice.reducer;
