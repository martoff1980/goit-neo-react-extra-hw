import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// управління заголовками авторизації
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// управління заголовками авторизації
export const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const authLogIn = createAsyncThunk(
  'auth/login',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', contact);
      setAuthHeader(res.data.token);
      localStorage.setItem('token', res.data.token);

      toast.success('User authorizated! ✅');
      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authLogOut = createAsyncThunk('auth/logout', async thunkAPI => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    const res = await axios.post('/users/logout');
    clearAuthHeader();
    localStorage.removeItem('token', token);

    toast.success('User have been logged out! ✅');
    return res.data;
  } catch (e) {
    toast.error(`${e.message}. 🔴`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', contact);
      setAuthHeader(res.data.token);
      localStorage.setItem('token', res.data.token);

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
    if (!token) {
      return thunkAPI.rejectWithValue('No token found');
    }

    try {
      setAuthHeader(token);
      const res = await axios.get('/users/current');

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
