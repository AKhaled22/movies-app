"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { Movie } from "@/types/movie";

type FavoritesContextType = {
  favorites: Movie[];
  isLoading: boolean;
  isFavorite: (movieId: string) => boolean;
  toggleFavorite: (movie: Movie) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
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
      try {
        localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
      } catch (error) {
        console.error("Failed to save favorites", error);
      }
    }
  }, [favorites, isLoading]);

  const isFavorite = useCallback(
    (movieId: string) => favorites.some((movie) => movie.imdbid === movieId),
    [favorites]
  );

  const toggleFavorite = useCallback((movie: Movie) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.imdbid === movie.imdbid);
      return exists
        ? prev.filter((fav) => fav.imdbid !== movie.imdbid)
        : [...prev, movie];
    });
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoading,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
