import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'

const MovieCard = ({movie}) => {

  const {data: genreData} = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) {
      return [];
    }

    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    })
    return genreNameList;
  }
  
  return (
    <div
    style={{backgroundImage: 
        "url(" + 
        `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` + 
        ")"
        }}
    className='movie-card'
    >
      <div className='overlay'>
        <h1>{movie.title}</h1>
        <div className='genres'>
          {showGenre(movie.genre_ids).map((genre, index) => (
            <Badge bg="danger" key={index} className='me-1'>{genre}</Badge>
          ))}
        </div>
        <div className='stats'>
          <div className='stat'>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffc107" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <span>{movie.vote_average}</span>
          </div>
          <div className='stat'>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff6b6b" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13.5 5.5c0-2.21-1.79-4-4-4 .5 1.5.5 3 0 4.5C8.7 7.7 6.5 9 4 9c0 4.42 3.58 8 8 8 3.87 0 7-3.13 7-7 0-2.76-1.67-5.12-4.06-6.23.38.83.56 1.74.56 2.73z"/></svg>
            <span>{movie.popularity}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
