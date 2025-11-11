import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({keyword, page}) => {
    const n = Number(page) || 1;
    const safePage = Math.max(1, Math.min(500, n)); // TMDB list endpoints cap at 500 pages
    return keyword 
        ? api.get(`/search/movie?query=${encodeURIComponent(keyword)}&page=${safePage}`) 
        : api.get(`/movie/popular?page=${safePage}`);
}
export const useSearchMovieQuery = ({keyword, page}) => {
    return useQuery({
        queryKey: ['movie-search', {keyword, page}],
        queryFn: () => fetchSearchMovie({keyword, page}),
        select: (result) => result.data,
    })
}