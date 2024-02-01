import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom' 
import LibraryListing from './LibraryListing';
import BookCreate from './BookCreate';
import BookEdit from './BookEdit';
import AuthorInfo from './AuthorInfo';

function App() {
   return (
    <>
      <h1>Formik Validation</h1>
      <BrowserRouter>
  <Routes>
    <Route path='/' element={<LibraryListing/>}></Route>
    <Route path='/books/create' element={<BookCreate/>}></Route>
    <Route path='/books/edit/:empid' element={<BookEdit/>}></Route>
    <Route path='/books/details/:empid' element={<AuthorInfo/>}></Route>
    
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App