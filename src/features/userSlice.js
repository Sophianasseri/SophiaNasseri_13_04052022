import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  firstName: null,
  lastName: null,
  token: null,
};
// API end points
const LOGIN_URL = 'http://localhost:3001/api/v1/user/login';
const PROFILE_URL = 'http://localhost:3001/api/v1/user/profile';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password, rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async ({ token, rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'post',
        url: PROFILE_URL,
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const editUserProfile = createAsyncThunk(
  'user/editUserProfile',
  async ({ token, firstName, lastName, rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'put',
        url: PROFILE_URL,
        headers: { Authorization: `Bearer ${token}` },
        data: { firstName, lastName },
      });
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
  reducers: {
    logout: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.body.token;
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        const { firstName, lastName } = action.payload.body;
        state.firstName = firstName;
        state.lastName = lastName;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        const { firstName, lastName } = action.payload.body;
        state.firstName = firstName;
        state.lastName = lastName;
      });
  },
});

export default userSlice.reducer;
