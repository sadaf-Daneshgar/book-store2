import React from 'react';

function BookForm() {
  return (
    <>
      <div className="contanier">
        <h2>ADD NEW BOOK</h2>
        <form>
          <input className="input-book" type="text" placeholder="BOOK TITLE..." />
          <input className="input-author" type="text" placeholder="Book Author..." />
          <select className="select-cata">
            <option value="Category">Category</option>
            <option value="Fiction">fiction</option>
          </select>
          <button className="addbtn" type="submit">ADD BOOK</button>
        </form>
      </div>
    </>
  );
}

export default BookForm;
