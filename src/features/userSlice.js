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
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = 'true';
        state.token = action.payload.body.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
