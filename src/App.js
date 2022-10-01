import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Filter from './Components/Filter';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className='nav-ul'>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
        
          <MovieList />
      </nav>
    </div>
  );
}

export default App;
