import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBooks } from '../redux/books/bookSlice';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.Books);

  const dispatch = useDispatch();

  return (
    <>
      {books.map((booksDetails) => (
        <Book
          key={booksDetails.item_id}
          category={booksDetails.category}
          title={booksDetails.title}
          author={booksDetails.author}
          onDelete={() => dispatch(removeBooks(booksDetails.item_id))}
        />
      ))}
    </>
  );
}

export default BookList;
