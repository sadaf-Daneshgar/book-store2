import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBooks, getBooks } from '../redux/books/bookSlice';
import Book from './Book';

function BookList() {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        books.map((bookDetails) => (
          <Book
            key={bookDetails.item_id}
            category={bookDetails.category}
            title={bookDetails.title}
            author={bookDetails.author}
            onDelete={() => dispatch(removeBooks(bookDetails.item_id))}
          />
        ))
      )}
    </>
  );
}

export default BookList;
