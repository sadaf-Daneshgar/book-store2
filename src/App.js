import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/category';
import BookForm from './components/bookForm';
import BookList from './components/Booklist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <BookList />
              <BookForm />
            </>
          )}
        />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
