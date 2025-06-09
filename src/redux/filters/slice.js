import { createSlice, createSelector } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    number: '',
    filtredBy: 'name',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changePhoneFilter(state, action) {
      state.number = action.payload;
    },
    changeFilterBy(state, action) {
      state.filtredBy = action.payload;
    },
  },
});

export const { changeFilter, changePhoneFilter, changeFilterBy } =
  filtersSlice.actions;

const filtersSliceReducer = filtersSlice.reducer;
export default filtersSliceReducer;
