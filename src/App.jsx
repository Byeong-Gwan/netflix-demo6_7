
import './App.css'
import AppLayout from './layout/AppLayout'
import HomePage from './pages/Homepage/HomePage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


// 1. 홈 페이지  /
// 2. 영화 전체보여주는 페이지 (서치) /movies
// 3. 영화 상세보여주는 페이지 /movies/:id
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='movies'>
          <Route index element={<MoviePage />} />
          <Route path=':id' element={<MovieDetailPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
