"use client";
import { useFavorites } from "@/providers/FavoritesProvider";
import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export const MovieCard = (props: Movie) => {
  const [imageError, setImageError] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <Link href={`/movies/${props.imdbid}`}>
      <div className="group bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300 -z-10" />

        <div className="relative aspect-[2/3] rounded-md overflow-hidden mb-4">
          <Image
            src={
              imageError || !props?.imageurl?.[0]
                ? "/fallbackPoster.png"
                : (props.imageurl[0] as string)
            }
            alt={`${props.title} movie poster`}
            fill
            className="object-cover group-hover:brightness-110 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            onError={() => setImageError(true)}
          />
        </div>
        <section className="w-35">
          <h3 className="text-xl font-semibold text-white truncate group-hover:text-gray-200 transition-colors duration-300">
            {props.title}
          </h3>
          <div className="flex justify-between items-center mt-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            <span>{props.released}</span>
            <span>{props.imdbrating}/10</span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <FaHeart
                size={15}
                className={`hover:text-white ${
                  isFavorite(props.imdbid) ? "text-white" : "text-black"
                } `}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleFavorite(props);
                }}
              />
            </span>
          </div>
        </section>
      </div>
    </Link>
  );
};
