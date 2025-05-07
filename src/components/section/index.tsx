"use client";

import { Movie } from "@/types/movie";
import { MovieCard } from "../movie-card";

type Props = {
  title: string;
  movies: Movie[];
};

export const Section = (props: Props) => {
  return (
    <section>
      <h2 className="text-2xl my-3">{props.title}</h2>
      <hr className="border-t border-gray-700 w-3xs" />
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {props.movies.map((movie: Movie) => (
          <MovieCard {...movie} key={movie.imdbid} />
        ))}
      </div>
    </section>
  );
};
