import { createSlice, createSelector } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
const filtersSliceReducer = filtersSlice.reducer;
export default filtersSliceReducer;

export const selectNameFilter = state => state.filters.name;
