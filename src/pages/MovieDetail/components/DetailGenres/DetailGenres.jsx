import React from 'react'

const DetailGenres = ({ genres = [] }) => {
  return (
    <div className="detail-genres">
      장르: {genres.map((g) => g.name).join(', ')}
    </div>
  )
}

export default DetailGenres
