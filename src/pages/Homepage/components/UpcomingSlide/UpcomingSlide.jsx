import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import { Alert } from 'react-bootstrap';
import MoviesSlider from '../../../../common/MoviesSlider/MoviesSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if (isLoading) {
      return;
    }
  
    if (isError) {
      return <Alert variant="danger">Error: {error.message}</Alert>
    }
    return (
      <div>
        <MoviesSlider title="Upcoming Movies" movies={data.results} responsive={responsive}/>
      </div>
    )
  }

  export default UpcomingSlide;