import React, { useEffect, useState } from 'react';
import './App.css';
import Movies from './Movies';

const API_URL_1 = 'https://www.omdbapi.com/?apikey=35c0a0a&s=titanic';
const API_URL_2 = 'https://www.omdbapi.com/?apikey=35c0a0a&s=avatar'; 
const API_URL_3 = 'https://www.omdbapi.com/?apikey=35c0a0a&s=cartoon'; 

function App() {
  const [moviesFromUrl1, setMoviesFromUrl1] = useState([]);
  const [moviesFromUrl2, setMoviesFromUrl2] = useState([]);
  const [moviesFromUrl3, setMoviesFromUrl3] = useState([]);

  const getMovies = async (url, setMovies) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search); 
      } else {
        console.log('No movies found or error in data:', data);
      }
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies(API_URL_1, setMoviesFromUrl1);
    getMovies(API_URL_2, setMoviesFromUrl2);
    getMovies(API_URL_3, setMoviesFromUrl3);
  }, []);

  return (
    <div className="app-container">
      <h1>NETFLIX
      <button className="netflix-button1" onClick={() => alert('Button clicked!')}>JOIN NOW</button>
      <button className="netflix-button2" onClick={() => alert('Button clicked!')}>Sign in</button>
      </h1>
      <span className="logo">UNLIMITED TV SHOWS &amp; MOVIES</span>

      <div className="movies-columns">
        <div>
          <div className='titanic'>
          <h2>Titanic</h2>
          </div>
          <Movies movies={moviesFromUrl1} />
        </div>
        <div>
          <h2>Avatar</h2>
          <Movies movies={moviesFromUrl2} />
        </div>
        <div>
          <h2>Cartoon</h2>
          <Movies movies={moviesFromUrl3} />
        </div>
      </div>
    </div>
  );
}

export default App;
