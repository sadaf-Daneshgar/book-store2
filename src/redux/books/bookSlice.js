import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g5ahFOiYPc0zxZGYNqkm/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(URL);
  const books = Object.keys(response.data).map((id) => ({
    item_id: id,
    ...response.data[id][0],
  }));
  return books;
});

export const addBooks = createAsyncThunk('books/addBooks', async (newBook) => {
  await axios.post(URL, newBook);
  return newBook;
});

export const removeBooks = createAsyncThunk('books/removeBooks', async (itemID) => {
  await axios.delete(`${URL}/${itemID}`);
  return itemID;
});

const initialState = {
  books: [],
  isLoading: false,
  message: '',
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = '';
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(addBooks.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = '';
        state.books.push(action.payload);
      })
      .addCase(addBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(removeBooks.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        const itemId = action.payload;
        state.books = state.books.filter((book) => book.item_id !== itemId);
        state.isLoading = false;
        state.message = '';
      })
      .addCase(removeBooks.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});

export default BooksSlice.reducer;
