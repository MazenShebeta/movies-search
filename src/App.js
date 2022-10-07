import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import MoviePage from './Components/MoviePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className='nav-ul'>
            <li className='nav-li'>
              <Link className='Link' to='/'>Home</Link>
            </li>
            <li> About </li>
            <li> Contact </li>
          </ul>
        </nav>        
        <Routes>
          //this is the route for App
          <Route path='/' element={<MovieList />} />
          <Route path='/movie/:id' element={<MoviePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
