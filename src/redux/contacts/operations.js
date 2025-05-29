import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const logIn = createAsyncThunk(
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

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token=localStorage.getItem('token');
    console.log('Get token',token);
    
    try {
      const res = await axios.get('/contacts',{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Contacts received");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const token=localStorage.getItem('token');
    console.log('Get token',token);
   
    try {
      const res = await axios.post('/contacts',contact, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Contact added");      
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const token=localStorage.getItem('token');
    console.log('Get token',token);
   
    try {
      await axios.delete(`/contacts/${contactId}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Contact deleted");
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
