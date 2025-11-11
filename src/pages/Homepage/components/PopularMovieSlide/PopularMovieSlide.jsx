import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import MoviesSlider from '../../../../common/MoviesSlider/MoviesSlider';
import { responsive } from '../../../../constants/responsive';



const PopularMovieSlide = () => {

  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <Alert variant="danger">Error: {error.message}</Alert>
  }
  return (
    <div>
      <MoviesSlider title="Popular Movies" movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default PopularMovieSlide
