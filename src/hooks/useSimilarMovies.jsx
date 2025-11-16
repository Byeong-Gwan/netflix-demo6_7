import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchSimilarMovies = ({ queryKey }) => {
  const id = queryKey[1];
  return api.get(`/movie/${id}/similar?language=en-US`);
}

export const useSimilarMoviesQuery = (id) => {
  return useQuery({
    queryKey: ['movie-similar', id],
    queryFn: fetchSimilarMovies,
    select: (res) => res.data,
    refetchOnMount: false,
    enabled: !!id
  })
}
