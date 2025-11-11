import React from 'react';
import ReviewItem from './ReviewItem';

const DetailReviews = ({ reviews = [], page, total_pages, onLoadMore }) => {
  return (
    <div className="detail-reviews">
      <h4 className="review-title">리뷰</h4>
      {!reviews.length && <div className="no-review">리뷰가 없습니다.</div>}
      {reviews.map(rv => <ReviewItem key={rv.id} author={rv.author} content={rv.content} />)}
      {page < total_pages && (
        <button className="btn-solid" onClick={onLoadMore}>더보기</button>
      )}
    </div>
  );
};

export default DetailReviews;