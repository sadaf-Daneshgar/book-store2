import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listBooks: [],
};

const booksSlice = createSlice({
  name: 'listBooks',
  initialState,
  reducers: {
    addbooks: (state, action) => {
      state.listBooks.push(action.payload);
    },
    removebooks: (state, action) => {
      state.listBooks.filter((books) => books.id !== action.payload);
    },
  },
});

export const { addbooks, removebooks } = booksSlice.actions;
export default booksSlice.reducer;
