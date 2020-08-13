import React from 'react';

class MovieCard extends React.Component {
    render(){
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={MovieCard.Poster} />
                </div>
                <div className="right">
                    <input />
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default MovieCard;