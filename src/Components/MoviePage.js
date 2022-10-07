//create movie page component
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.js';
import './MoviePage.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MoviePage() {
    const { id } = useParams();
    const movie = data.find((movie) => movie.id === id);
    console.log(movie);
    return (
        <div className='movie-page'>
            <div className='movie-page-content'>
                <div className='movie-page-image'>
                    <img src={movie.imagePath} alt='movie poster' />
                </div>
                <div className='movie-page-info'>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>Rating: {movie.rating}</p>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
