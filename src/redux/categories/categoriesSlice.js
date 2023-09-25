import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  checksStatus: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checksStatus: (state) => state,
  },
});

export default categoriesSlice.reducer;
