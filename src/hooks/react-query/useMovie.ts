import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/types/movie";
import * as keys from "@/hooks/react-query/keys";

type Params = {
  id: string;
};

const execute = async (params: Params): Promise<Movie> => {
  return api
    .get(`/gettitleDetails?imdbid=${params.id}`)
    .then((res) => res.data);
};

export const useMovie = (params: Params) => {
  return useQuery({
    queryKey: keys.movie(params.id),
    queryFn: () => execute(params),
    enabled: !!params.id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
