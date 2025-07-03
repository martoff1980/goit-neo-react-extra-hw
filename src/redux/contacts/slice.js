import { useSelector } from 'react-redux';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { authLogOut } from '../auth/operations';
import {
  fetchContacts,
  addContact,
  editContact,
  deleteContact,
} from './operations';
import { selectNameFilter, selectPhoneFilter } from '../filters/selectors';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.items.findIndex(c => c.id === updated.id);
        if (index !== -1) {
          state.items[index] = updated;
        }
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Критично важлива частина — очищення контактів при виході
      .addCase(authLogOut.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

export const selectFilteredContactsByPhone = createSelector(
  [selectContacts, selectPhoneFilter],
  (contacts, phoneFilter) =>
    contacts.filter(contact => contact.number.includes(phoneFilter))
);

export const selectFilterBy = state => state.filters.filtredBy;

const contactsSliceReducer = contactsSlice.reducer;
export default contactsSliceReducer;
