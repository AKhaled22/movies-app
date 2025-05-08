"use client";
import { Carousel } from "@/components/carousel";
import { EmptyState } from "@/components/empty-state";
import { Pagination } from "@/components/pagination";
import { Section } from "@/components/section";
import { SectionSkeleton } from "@/components/section/loading";
import { useMovies } from "@/hooks/react-query/useMovies";
import { useFavorites } from "@/providers/FavoritesProvider";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const { favorites, isLoading: isFavoritesLoading } = useFavorites();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { data, isLoading, isError } = useMovies({
    page,
  });

  if (isLoading)
    return (
      <div className="px-7">
        <SectionSkeleton title="Search Results:" />;
      </div>
    );

  if (isError) throw new Error("Error loading movies");

  if (data?.length == 0 || !data) return <EmptyState />;

  return (
    <>
      <Carousel movies={data?.slice(0, 5)} />
      <div className="px-5">
        {!isFavoritesLoading && favorites.length > 0 && (
          <Section title="Favorites" movies={favorites} />
        )}
        <Section title="Latest Movies" movies={data} />
        <Pagination totalPages={5} />
      </div>
    </>
  );
}
