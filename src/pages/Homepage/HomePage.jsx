import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedSlide from './components/TopRatedSlide/TopRatedSlide'
import UpcomingSlide from './components/UpcomingSlide/UpcomingSlide'

// 1. 배너 만들기 => popular movie 첫번째 영화를 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedSlide />
      <UpcomingSlide />
    </div>
  )
}

export default HomePage
