"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import Image from "next/image";
import { Movie } from "@/types/movie";
import { useState } from "react";

export const Carousel = (props: { movies: Movie[] }) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleError = (index: string) => {
    setErrors((prev) => ({ ...prev, [index]: true }));
  };
  return (
    <ReactCarousel
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval={3000}
      className="carousel-container"
    >
      {props.movies.map((movie: Movie) => (
        <div
          key={movie.imdbid}
          className="relative aspect-video w-full h-[80vh]"
        >
          <Image
            src={
              errors[movie.imdbid] || !movie?.imageurl?.[0]
                ? "/fallbackPoster.png"
                : (movie.imageurl[0] as string)
            }
            alt="Slide 1"
            fill
            className="object-contain"
            sizes="100vw"
            priority
            onError={() => handleError(movie.imdbid)}
          />
          <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-xl font-bold">{movie.title}</h2>
            <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-300">
              <p className="text-gray-300">{movie.imdbrating}/10</p>
              <p className="text-gray-300">{movie.runtime}</p>
              <p className="text-gray-300">{movie.released}</p>
            </div>
            <p className="text-gray-300">{movie.synopsis}</p>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
};
