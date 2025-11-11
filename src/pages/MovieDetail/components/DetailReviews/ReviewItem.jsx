import React from 'react'

const ReviewItem = ({ author, content }) => {
  const [open, setOpen] = React.useState(false);
  const max = 200;
  const isLong = (content || '').length > max;
  const shown = open || !isLong ? content : `${content.slice(0, max)}...`;
  return (
    <div className="review-item">
      <div className="review-item__author">{author || '익명'}</div>
      <div className="review-item__content">{shown}</div>
      {isLong && (
        <button className="btn-ghost" onClick={() => setOpen(v => !v)}>
          {open ? '접기' : '더보기'}
        </button>
      )}
    </div>
  );
};

export default ReviewItem
