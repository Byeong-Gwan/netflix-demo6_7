import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchMovieTrailer = ({ queryKey }) => {
    const id = queryKey[1];
    return api.get(`/movie/${id}/videos?language=en-US`);
}
export const useMovieTrailerQuery = (id) => {
    return useQuery({
        queryKey: ['movie-trailer', id],
        queryFn: fetchMovieTrailer,
        select: (res) => res.data,
        refetchOnMount: false,
        enabled: !!id // id가 존재할 때만 호출
    })
}