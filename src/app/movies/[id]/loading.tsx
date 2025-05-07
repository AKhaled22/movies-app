"use client";

export default function DetailsPageSkeleton() {
  return (
    <div className="p-7 animate-pulse">
      <div className="flex flex-col items-center md:flex-row gap-5">
        {/* Image Skeleton */}
        <div className="md:w-1/3 w-full justify-center max-w-[400px] aspect-[2/3] rounded-md overflow-hidden mb-4 bg-gray-700"></div>
        
        {/* Content Skeleton */}
        <section className="flex-1 md:flex-5/6 space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-700 rounded"></div>
          
          {/* Rating/Runtime */}
          <div className="flex gap-4">
            <div className="h-4 w-16 bg-gray-700 rounded"></div>
            <div className="h-4 w-16 bg-gray-700 rounded"></div>
          </div>
          
          {/* Overview */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-700 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
          </div>
          
          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 w-lg">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="h-3 w-20 bg-gray-700 rounded"></div>
                <div className="h-4 w-24 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}