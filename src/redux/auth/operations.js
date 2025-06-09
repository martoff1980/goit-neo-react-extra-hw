import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const authLogIn = createAsyncThunk(
  'auth/login',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', contact);
      localStorage.setItem('token', res.data.token);

      toast.success('User authorizated! ✅');
      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  'auth/logout',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', contact);
      localStorage.setItem('token', res.data.token);

      toast.success('User logouted! ✅');
      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', contact);

      toast.success('User registered! ✅');
      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (token, thunkAPI) => {
    try {
      const res = await axios.get('/users/current', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Hey, User I now you login! ⚙️', {
        removeDelay: 10000,
      });
      return { user: res.data };
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
