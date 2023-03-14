import './App.css';
import Card from './components/card';
import Nav from './components/nav'
import BookInfo from './components/bookInfo'
import FavList from './components/favlist'
import {Link , NavLink , Route, BrowserRouter , Routes} from 'react-router-dom';
import { useState } from 'react';
function App() {
   const [bookId,setBookId]= useState(null);
  return( 
    <div className="main">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Card />}/>
        <Route path='/book/:id' element={<BookInfo fun={setBookId}/>}/>
        <Route path='/favlist' element={<FavList id={bookId}/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
