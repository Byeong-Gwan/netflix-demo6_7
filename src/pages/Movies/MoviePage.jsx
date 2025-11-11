import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Col, Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import Alert from 'react-bootstrap/Alert';
import './MoviePage.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

// 경로 2가지 
// nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값 바뀔때 마다 useSearchMovie에 page 까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data: genreData } = useMovieGenreQuery();
  const [sortBy, setSortBy] = useState('popularity');
  const [genre, setGenre] = useState(null);


  const handlePageClick = ({selected}) => {
    setPage(selected + 1);
  }

  const { data, isLoading, isError, error } = useSearchMovieQuery({keyword, page});
  if (isLoading) {
    return;
  }

  if (isError) {
    return <Alert variant="danger">Error: {error.message}</Alert>
  }
  let movies = [...(data?.results || [])];
  if (genre) movies = movies.filter((m) => m.genre_ids?.includes(genre));
  movies.sort(
    sortBy === 'recent'
      ? (a, b) => new Date(b.release_date) - new Date(a.release_date)
      : (a, b) => (b.popularity || 0) - (a.popularity || 0)
  );
  return (
    <Container>
      <Row>
        <Col lg={6} xs={12} className="d-flex gap-2 mb-3">
          <DropdownButton id="sort-dropdown" title="정렬기준" variant="danger" size="sm">
            <Dropdown.Item onClick={() => setSortBy('popularity')}>인기순</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy('recent')}>최신순</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="genre-dropdown" title="장르별 검색" variant="danger" size="sm">
            <Dropdown.Item onClick={() => setGenre(null)}>전체</Dropdown.Item>
            {genreData?.map((g) => (
              <Dropdown.Item key={g.id} onClick={() => setGenre(g.id)}>{g.name}</Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        <Col lg={12} xs={12}>
        <Row>
          {movies.map((movie, index) => (
              <Col key={index}>
                <MovieCard movie={movie} />
              </Col>
            ))}
        </Row>
        <ReactPaginate
          nextLabel="›"
          previousLabel="‹"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages} // 전체 페이지
          containerClassName="nf-pagination"
          pageClassName="nf-page"
          pageLinkClassName="nf-link"
          previousClassName="nf-nav"
          previousLinkClassName="nf-link"
          nextClassName="nf-nav"
          nextLinkClassName="nf-link"
          breakLabel="..."
          breakClassName="nf-break"
          breakLinkClassName="nf-link"
          activeClassName="is-active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage
