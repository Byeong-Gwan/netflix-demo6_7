import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies'
import { Alert } from 'react-bootstrap';
import MoviesSlider from '../../../../common/MoviesSlider/MoviesSlider';
import { responsive } from '../../../../constants/responsive';

const TopRatedSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) {
      return;
    }
  
    if (isError) {
      return <Alert variant="danger">Error: {error.message}</Alert>
    }
    return (
      <div>
        <MoviesSlider title="Top Rated Movies" movies={data?.results} responsive={responsive}/>
      </div>
    )
  }

export default TopRatedSlide
