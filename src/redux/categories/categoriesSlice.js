import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  initialStatus: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checksStatus: (state) => state,
  },
});

export const { checksStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
