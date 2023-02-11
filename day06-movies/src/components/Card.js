import React from 'react'

export default function Card(props) {
    const {movie}=props;
    const {Title, Poster, Type, Year}=movie

  return (
    <div className="movie">
    <div>
        <div className="imgBox">
          <img src={Poster} alt={Title} />
        </div>
        <div className="cardBody">
          <h3>{Title}</h3>
          <p>{Type}</p>
        </div>
      
    </div>
  </div>
  )
}
