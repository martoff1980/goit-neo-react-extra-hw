import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { setAuthHeader, clearAuthHeader } from '../auth/operations';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      setAuthHeader(token);
      const res = await axios.get('/contacts');

      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      setAuthHeader(token);
      const res = await axios.post('/contacts', contact);

      toast.success('Contact added. 📄');
      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    const token = localStorage.getItem('token');

    const body = {
      name: contact.name,
      number: contact.number,
    };

    try {
      setAuthHeader(token);
      const res = await axios.patch(`/contacts/${contact.id}`, body);

      toast.success('Contact saved. 💾');
      return res.data;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      setAuthHeader(token);
      await axios.delete(`/contacts/${contactId}`);

      toast.success('Contact deleted. 🗑️');
      return contactId;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
