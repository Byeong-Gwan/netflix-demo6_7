import React from 'react'

const DetailMeta = ({ release_date, runtime, vote_average, popularity, budget }) => {
  return (
    <div className="detail-meta">
      개봉일 {release_date || '-'} · 상영시간 {runtime || '-'}분 · 평점 ★ {Number(vote_average || 0).toFixed(1)}
      <div>인기도: {popularity?.toLocaleString?.() || 0} · 예산: {budget ? `$${budget.toLocaleString()}` : '-'}</div>
    </div>
  )
}

export default DetailMeta
