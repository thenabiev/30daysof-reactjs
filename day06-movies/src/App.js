import React, { useState, useEffect } from "react";
import {HiSearch} from 'react-icons/hi'
import Card from "./components/Card";

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=966ed34a';

function App() {

  const [movies, setMovies]=useState([]);
  const [searchTerm, setSearchTerm]=useState('')

  const searchMovies= async (title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();
    setMovies(data.Search)
  }

 
  return (
    <div className="app">
      <div className="navbar">
      <h1>Movie<span>App</span></h1>
      <div className="search">
        <input 
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        placeholder="Search for movies..."
        type="text" />
        <HiSearch 
        className="icon"
        onClick={()=>{searchMovies(searchTerm)}}/>
      </div>
      </div>
      <div className="container">
        {
          movies?.length>0 ?
          movies.map((movie)=>(
            <Card 
            key={movie.imdbID}
            movie={movie}/>
          )) :
          <h3>Empty movie list</h3>
        }
      </div>
    </div>
  );
}

export default App;
