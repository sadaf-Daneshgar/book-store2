import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/bookSlice';

function BookForm() {
  const [newbook, setNewbook] = useState({
    title: '',
    author: '',
    category: 'Category',
  });

  const dispatch = useDispatch();

  function handleAddBtn(e) {
    e.preventDefault();

    const newBook = {
      item_id: crypto.randomUUID(),
      title: newbook.title,
      author: newbook.author,
      category: newbook.category,
    };

    dispatch(addBooks(newBook));

    setNewbook({
      title: '',
      author: '',
      category: 'Category',
    });
  }

  return (
    <>
      <div className="contanier">
        <h2>ADD NEW BOOK</h2>
        <div>
          <input
            className="input-book"
            type="text"
            placeholder="BOOK TITLE..."
            value={newbook.title}
            onChange={(e) => setNewbook({ ...newbook, title: e.target.value })}
          />
          <input
            className="input-author"
            type="text"
            placeholder="Book Author..."
            value={newbook.author}
            onChange={(e) => setNewbook({ ...newbook, author: e.target.value })}
          />
          <select
            className="select-cata"
            value={newbook.category}
            onChange={(e) => setNewbook({ ...newbook, category: e.target.value })}
          >
            <option value="Category">Category</option>
            <option value="Fiction">fiction</option>
          </select>
          <button className="addbtn" type="submit" onClick={handleAddBtn}>
            ADD BOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default BookForm;
