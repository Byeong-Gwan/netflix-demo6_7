import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { Alert } from 'react-bootstrap';
import './UpcomingSlide.style.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

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
        <h3>Upcoming</h3>
        <Carousel
        infinite={true}
        centerMode={true}
        itemClass='movie-silder p-1'
        containerClass='carousel-container'
        responsive={responsive}
      >
        {data?.results?.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </Carousel>
      </div>
    )
  }

  export default UpcomingSlide;