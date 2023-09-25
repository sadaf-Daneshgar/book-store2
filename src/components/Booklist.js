import React from 'react';
import Book from './Book';

function BookList() {
  const listBooks = [
    {
      id: 1,
      category: 'general',
      title: 'Small Book 1',
      author: 'Sadaf',
    },
    {
      id: 2,
      category: 'general',
      title: 'Small Book 2',
      author: 'Sadaf',
    },
  ];

  return (
    <>
      {listBooks.map((books) => (
        <Book
          key={books.id}
          category={books.category}
          title={books.title}
          author={books.author}
        />
      ))}
    </>
  );
}

export default BookList;
