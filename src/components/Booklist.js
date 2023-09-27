import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBooks } from '../redux/books/bookSlice';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.Books);

  const dispatch = useDispatch();

  return (
    <>
      {books.map((bookDetails) => (
        <Book
          key={bookDetails.item_id}
          category={bookDetails.category}
          title={bookDetails.title}
          author={bookDetails.author}
          onDelete={() => dispatch(removeBooks(bookDetails.item_id))}
        />
      ))}
    </>
  );
}

export default BookList;
