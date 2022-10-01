import React from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';

function MovieList(props) {
    
    const[userData, setUserData] = React.useState([]);
    const[userSearchData, setUserSearchData] = React.useState([]);
    const[name, setName] = React.useState('')

    React.useEffect(() => {
        const data = [
            {title:'one', description:'one', rating:'one'},
            {title:'two', description:'two', rating:'two'},
            {title:'three', description:'three', rating:'three'},
            {title:'four', description:'four', rating:'four'},
            {title:'five', description:'five', rating:'five'},
            {title:'six', description:'six', rating:'six'},
            {title:'seven', description:'seven', rating:'seven'},
            {title:'eight', description:'eight', rating:'eight'},
            {title:'nine', description:'nine', rating:'nine'},
            {title:'ten', description:'ten', rating:'ten'},
            {title:'eleven', description:'eleven', rating:'eleven'},
            {title:'twelve', description:'twelve', rating:'twelve'},
            {title:'thirteen', description:'thirteen', rating:'thirteen'},
            {title:'fourteen', description:'fourteen', rating:'fourteen'},
            {title:'fifteen', description:'fifteen', rating:'fifteen'},
            {title:'sixteen', description:'sixteen', rating:'sixteen'},
        ]
    
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
                    return <MovieCard title={movie.title} description={movie.description} rating={movie.rating} imagePath={movie.imagePath} />
                })}
            </div>
        </div>
    );
}

export default MovieList;





// <MovieCard title = "The Shawshank Redemption" description='Two imprisoned' />,
        //     <MovieCard title = "The Godfather" description='The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' rating = '4' />,
        //     <MovieCard title = "The Godfather: Part II" description='The early life and career of Vito Corleone in 1920s New York City is portrayed while his son, Michael, expands and tightens, his grip on the family crime syndicate.' />,
        //     <MovieCard title = "The Dark Knight" description='When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one ,of the greatest psychological tests of his a,bility to fight injustice.' />,
        //     <MovieCard title = "12 Angry Men" description='A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.' />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,
        //     <MovieCard />,