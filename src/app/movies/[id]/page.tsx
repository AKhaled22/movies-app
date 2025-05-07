"use client";

import Image from "next/image";
import DetailsPageSkeleton from "./loading";
import { useMovie } from "@/hooks/react-query/useMovie";
import { useParams } from "next/navigation";
import { EmptyState } from "@/components/empty-state";

export default function DetailsPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovie({ id: id as string });

  if (isLoading) return <DetailsPageSkeleton />;

  if (isError) throw new Error("Error loading movie");

  if (!data) return <EmptyState message="Movie is not found" />;

  return (
    <div className="p-7">
      <div className="flex flex-col items-center md:flex-row gap-5">
        <div className="md:w-1/3 w-full max-w-[400px] aspect-[2/3] rounded-md overflow-hidden mb-4 relative">
          <Image
            src={data?.imageurl[0] as string}
            alt={`${"title"} movie poster`}
            fill
            className="object-cover group-hover:brightness-110 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <section className="flex-1 md:flex-5/6">
          <h1 className="text-3xl font-bold text-white">{data?.title}</h1>
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <span>{data?.imdbrating}/10</span>
            <span>{data?.runtime}</span>
          </div>
          <p className="text-gray-400 mb-4">{data?.synopsis}</p>
          <div className="grid grid-cols-2 gap-2 w-lg">
            {/* Row 1 */}
            <span className="text-gray-400 text-sm">Release Date</span>
            <span className="text-white font-medium">{data?.released}</span>
            <span className="text-gray-400 text-sm">Genres</span>
            <span className="text-white font-medium">
              {data?.genre.join(", ")}
            </span>

            {/* Row 2 */}
            <span className="text-gray-400 text-sm">Language</span>
            <span className="text-white font-medium">
              {data?.language.join(", ")}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
