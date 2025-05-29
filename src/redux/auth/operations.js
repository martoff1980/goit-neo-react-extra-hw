import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const authLogIn = createAsyncThunk(
  'contacts/login',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/login',contact);
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  'contacts/users/signup',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup',contact);
      console.log('User created:',res.data);
      // localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
