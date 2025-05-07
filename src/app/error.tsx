"use client";
import { FaExclamation } from "react-icons/fa";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <FaExclamation className="w-12 h-12 text-red-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-200">
        {"An unexpected error has occured! Please try again later."}
      </h3>
    </div>
  );
}
