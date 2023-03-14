import './App.css';
import Card from './components/card';
import { useState , useEffect} from 'react';
function App() {
  const api='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=';
  const key='dM0ypv3aAlGpKWR2QDHx3Z5OHN2B6yZw';

  return( 
    <div className="head">
      <h1>Top 15 Books</h1>
      <Card  />
    </div>
  );
}

export default App;
