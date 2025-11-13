import React from 'react'
import IMG from '../../../../common/comomImage/image'

const DetailHero = ({ backdrop_path, poster_path, title }) => {

  return (
    <div>
    {backdrop_path && (
        <div
          className="detail-hero__backdrop"
          style={{ backgroundImage: `url(${IMG.backdrop(backdrop_path)})` }}
        />
      )}
      <div className="detail-hero__body">
        {poster_path && (
          <img
            src={IMG.poster(poster_path)}
            alt={title}
            className="detail-hero__poster"
          />
        )}
        <h2 className="detail-title">{title}</h2>
      </div>
    </div>
  )
}

export default DetailHero
