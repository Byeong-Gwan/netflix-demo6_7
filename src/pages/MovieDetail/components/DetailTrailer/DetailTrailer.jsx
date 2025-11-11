import React from 'react';

const DetailTrailer = ({ videos = [] }) => {
  const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube') || videos[0];
  if (!trailer || trailer.site !== 'YouTube') return null;
  return (
    <div className="detail-trailer">
      <h4>예고편</h4>
      <iframe
        title="trailer"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        allowFullScreen
      />
    </div>
  );
};
export default DetailTrailer;