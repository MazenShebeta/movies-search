//create movie page component
import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.js';
import './MoviePage.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MoviePage() {
    const { id } = useParams();
    const movie = data.find((movie) => movie.id == id);
    console.log(movie);
    return (
        <div>
            <div className='movie-page'>
                <div className='movie-page-left'>
                    <img src={movie.imagePath} />
                </div>
                <div className='movie-page-right'>
                    <h1>{movie.title}</h1>
                    {/* <p>{movie.description}</p> */}
                    <p>Rating: {movie.rating}</p>
                </div>
            </div>
            <div>
                <Link to='/'>
                        <Button variant='primary'>Back to Home</Button>
                </Link>
            </div>

        </div>
    );
}

export default MoviePage;
