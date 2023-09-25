import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    Books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
