import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDetailsMovieQuery } from '../../hooks/useDetailsMovie';
import { useMovieReviewsQuery } from '../../hooks/useMovieReviews';
import DetailHero from './components/DetailHero/DetailHero';
import DetailMeta from './components/DetailMeta/DetailMeta';
import DetailGenres from './components/DetailGenres/DetailGenres';
import DetailOverview from './components/DetailOverview/DetailOverview';
import DetailTrailer from './components/DetailTrailer/DetailTrailer';
import DetailReviews from '../MovieDetail/components/DetailReviews/DetailReviews';
import './MovieDetailPage.css'

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailsMovieQuery(id);
  const [reviewPage, setReviewPage] = useState(1);
  const { data: reviewData } = useMovieReviewsQuery({ movie_id: id, page: reviewPage });

  // 리뷰 누적(페이지 더보기 시 append)
  const [allReviews, setAllReviews] = useState([]);
  React.useEffect(() => {
    if (reviewData?.results) {
      setAllReviews(prev => (reviewPage === 1 ? reviewData.results : [...prev, ...reviewData.results]));
    }
  }, [reviewData, reviewPage]);

  if (isLoading) return null;
  if (isError) return <div className="error-message">Error: {error?.message}</div>;
  if (!data) return <div className="no-data-message">No data</div>;

  return (
    <div className="detail-page">
      <DetailHero backdrop_path={data.backdrop_path} poster_path={data.poster_path} title={data.title} />
      <DetailMeta
        release_date={data.release_date}
        runtime={data.runtime}
        vote_average={data.vote_average}
        popularity={data.popularity}
        budget={data.budget}
      />
      <DetailGenres genres={data.genres} />
      <DetailOverview text={data.overview} />
      <DetailTrailer videos={data.videos?.results || []} />
      <DetailReviews
        reviews={allReviews}
        page={reviewData?.page || 1}
        total_pages={reviewData?.total_pages || 1}
        onLoadMore={() => setReviewPage(p => p + 1)}
      />
    </div>
  );
};
export default MovieDetailPage;