import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { object } from 'prop-types';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g5ahFOiYPc0zxZGYNqkm/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(URL);
    const { data } = await response.data; 
    return data;
  } catch (err) {
    return err;
  }
});

export const addBooks = createAsyncThunk('books/addBooks', async (newBook) => {
  try {
    const response = await axios.post(URL, newBook);
    const { data } = await response.data; 
    return data;
  } catch (err) {
    return err
  }
});

export const removeBooks = createAsyncThunk('books/removeBooks', async (itemID) => {
  try {
    const { data } = await axios.delete(`${URL}/${itemID}`);
    return data;
  } catch (err) {
     return err;
  }
});

function AddNewBooks({Ketab}){
  return {
    item_id: crypto.randomUUID(),
    title: Ketab.title,
    author: Ketab.author,
    category: Ketab.category
  }
}

const initialState = {
  books: [],
  isLoading: false,
  message: '',
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = '';

        const Books = object.Books(action.payload);
        state.books = Books.map((book) => AddNewBooks(book, action.payload(book)))
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(addBooks.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(addBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.message = '';
      })
      .addCase(addBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(removeBooks.pending, (state) => {
        state.isLoading = true;
        state.message = '';
      })
      .addCase(removeBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.message = '';
      })
      .addCase(removeBooks.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});

export default BooksSlice.reducer;
