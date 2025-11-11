import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";


const fetchDetailsMovie = (movie_id) => {
    return api.get(`/movie/${movie_id}`);
}

export const useDetailsMovieQuery = (movie_id) => {
    return useQuery({
        queryKey: ['movie-details', movie_id],
        queryFn: () => fetchDetailsMovie(movie_id),
        select: (result) => result.data,
    })
}