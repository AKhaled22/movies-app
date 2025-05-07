import { GiFilmProjector } from "react-icons/gi";

export const EmptyState = ({
  message = "No movies found",
}: {
  message?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <GiFilmProjector className="w-12 h-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-200">{message}</h3>
      <p className="text-gray-400 mt-2">
        {"Try adjusting your search or filter to find what you're looking for."}
      </p>
    </div>
  );
};
