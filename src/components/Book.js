import React from 'react';
import PropTypes from 'prop-types';

function Book({
  category, title, author, onDelete,
}) {
  return (
    <div className="bookcont">
      <div className="books-info">
        <div className="book-cata">{category}</div>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <button type="button" className="btn" id="commit">
          Comments
        </button>
        <button type="button" className="btn" id="delete" onClick={onDelete}>
          Remove
        </button>
        <button type="button" className="btn" id="edit">
          Edit
        </button>
      </div>
      <div className="compelet">
        <span className="precent">64%</span>
        <h5>compelet</h5>
      </div>
      <div className="current-part">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <h4>Chapter</h4>
        <button type="button" className="upd-btn">
          Update Prograss
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
