import React from 'react'

const DetailGenres = ({ genres = [] }) => {
  return (
    <div className="detail-genres">
      {genres.map((g) => (
        <span key={g.id || g.name} className="genre-chip">{g.name}</span>
      ))}
    </div>
  )
}

export default DetailGenres
