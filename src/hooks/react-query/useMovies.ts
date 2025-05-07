import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/types/movie";
import * as keys from "@/hooks/react-query/keys";

type Params = {
  page: string;
};

const execute = async (params: Params): Promise<Movie[]> => {
  return api
    .get(
      `/advancedsearch?start_year=2000&end_year=2025&min_imdb=7&max_imdb=10&type=movie&sort=latest&page=${params.page}`
    )
    .then((res) => res.data.results);
};

export const useMovies = (params: Params) => {
  return useQuery({
    queryKey: keys.movies(params.page),
    queryFn: () => execute(params),
    enabled: !!params.page,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
