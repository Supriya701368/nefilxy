import React from 'react';
import './App.css'
const Movies = (props) => {
  return (
    <div className="movies-container">
      {props.movies.length > 0 ? (
        props.movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default Movies;

