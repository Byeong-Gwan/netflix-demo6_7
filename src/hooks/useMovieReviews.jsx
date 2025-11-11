import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReviews = ({movie_id, page}) => {
    return api.get(`/movie/${movie_id}/reviews?page=${page}`);
}

export const useMovieReviewsQuery = ({movie_id, page}) => {
    return useQuery({
        queryKey: ['movie-reviews', {movie_id, page}],
        queryFn: () => fetchMovieReviews({movie_id, page}),
        select: (result) => result.data,
    })
}