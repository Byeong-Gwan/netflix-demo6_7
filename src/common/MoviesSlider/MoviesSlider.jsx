import React from 'react'
import './MoviesSlider.style.css'
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';


const MoviesSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
      infinite={true}
      centerMode={true}
      itemClass='movie-silder p-1'
      containerClass='carousel-container'
      responsive={responsive}
    >
      {movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
    </Carousel>
    </div>
  )
}

export default MoviesSlider
