import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { useMovieTrailerQuery } from '../../../../hooks/useMovieTrailer'
import VideoModal from '../../../../common/VideoModal/VideoModal'
import './Banner.style.css'

const Banner = () => {

  const { data , isLoading, isError, error } = usePopularMoviesQuery();
  const first = data?.results?.[0];
  const movieId = first?.id;
  const { data: trailerData } = useMovieTrailerQuery(movieId);
  const trailer = trailerData?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube') || trailerData?.results?.[0];
  const [open, setOpen] = React.useState(false);
  if (isLoading) {
    <div>Loading...</div>;
  }
  if (isError) {
    <Alert variant="danger">Error: {error.message}</Alert>;
  }
  return (
    <div style={{
        backgroundImage:"url(" + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${first?.backdrop_path || first?.poster_path}` + ")"
    }} className='banner'>
        
      <div className='text-white banner-text-area'>
        <h1>{first?.title}</h1>
        <p>{first?.overview}</p>
        {trailer && (
          <button className='banner-play-btn' onClick={() => setOpen(true)}>재생</button>
        )}
      </div>
      <VideoModal
        show={open}
        onHide={() => setOpen(false)}
        youtubeKey={trailer?.key}
        fullscreen={false}
        title={first?.title || '예고편'}
      />
    </div>
  )
}

export default Banner

