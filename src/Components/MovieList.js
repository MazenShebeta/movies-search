import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieCard from "./MovieCard";
import './MovieList.css';
import data from './data.js';


function MovieList(props) {
    
    const[userData, setUserData] = React.useState([]);
    const[userSearchData, setUserSearchData] = React.useState([]);
    const[name, setName] = React.useState('')

    //use effect with data
    React.useEffect(() => {
        

        setUserData(data);
        setUserSearchData(data);
    }, []);
    
    function handleSearchInput(event) {
        const value = event.target.value;
        setName(value);
        const filteredData = userData.filter(item => {
            return item.title.toLowerCase().includes(value.toLowerCase());
        });
        setUserSearchData(filteredData);
    }

    return (
        <div>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' onChange={handleSearchInput} />
            </div>
            <div className="MovieList">
                {userSearchData.map((movie) => {
                    //when card is clicked it will go to the trailer page
                    return (
                        <Link to={`/movie/${movie.id}`}>
                            <MovieCard title={movie.title} description={movie.description} rating={movie.rating} imagePath={movie.imagePath} />
                        </Link>
                    );
                    
                })}
            </div>
        </div>
    );
}

export default MovieList;