import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      const res = await axios.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      const res = await axios.post('/contacts', contact, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
    // console.log('Get token', token);

    const body = {
      name: contact.name,
      number: contact.number,
    };

    try {
      const res = await axios.patch(`/contacts/${contact.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
    // console.log('Get token',token);

    try {
      await axios.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Contact deleted. 🗑️');
      return contactId;
    } catch (e) {
      toast.error(`${e.message}. 🔴`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
