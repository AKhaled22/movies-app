"use client";

import { MovieCardSkeleton } from "../movie-card/loading";

export const SectionSkeleton = (props: { title: string }) => {
  return (
    <section>
      <h2 className="text-2xl my-3">{props.title}</h2>
      <hr className="border-t border-gray-700 w-md" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-6">
        {Array.from({ length: 15 }, (_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};
