import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => (
  <>
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" id="imp" to="/">
            Bookstore CMS
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="imp2" to="/">
            Books
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="imp3" to="/category">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
