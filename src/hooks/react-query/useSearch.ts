import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/types/movie";
import * as keys from "@/hooks/react-query/keys";

type Params = {
  title: string;
  page: string;
};

const execute = async (params: Params): Promise<Movie[]> => {
  return api
    .get(`/search?title=${params.title}&page=${params.page}`)
    .then((res) => res.data.results);
};

export const useSearch = (params: Params) => {
  return useQuery({
    queryKey: keys.search(params.title, params.page),
    queryFn: () => execute(params),
    enabled: !!params.title && !!params.page,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
