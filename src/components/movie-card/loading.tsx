"use client";

export const MovieCardSkeleton = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md ">
      <div className="relative aspect-[2/3] rounded-md overflow-hidden mb-4 bg-gray-700 animate-pulse">
      </div>
      <div className="h-6 bg-gray-700 rounded animate-pulse mb-2"></div>
      <div className="flex justify-between mt-3">
        <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-12 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};