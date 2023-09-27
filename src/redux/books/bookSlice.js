import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const BooksSlice = createSlice({
  name: 'booksList',
  initialState,
  reducers: {
    addBooks(state, action) {
      state.push(action.payload);
    },
    removeBooks: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
});

export const { addBooks, removeBooks } = BooksSlice.actions;
export default BooksSlice.reducer;
