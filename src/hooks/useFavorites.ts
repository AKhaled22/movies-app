"use client";
import { useState, useEffect } from "react";
import { Movie } from "@/types/movie";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const stored = localStorage.getItem("favoriteMovies");
        setFavorites(stored ? JSON.parse(stored) : []);
      } catch (error) {
        console.error("Failed to load favorites", error);
        setFavorites([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    }
  }, [favorites, isLoading]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.imdbid === movie.imdbid);
      return exists
        ? prev.filter((fav) => fav.imdbid !== movie.imdbid) // Remove if exists
        : [...prev, movie]; // Add if new
    });
  };

  return {
    favorites,
    isLoading,
    isFavorite: (movieId: string) =>
      favorites.some((movie) => movie.imdbid === movieId),
    toggleFavorite,
  };
};
