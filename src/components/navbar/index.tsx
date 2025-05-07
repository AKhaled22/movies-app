"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-transparent py-4 px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold">
          MovieDB
        </Link>

        <form
          onSubmit={handleSearch}
          className="flex gap-2 rounded-full py-2 px-3 bg-[#ffffff33] sm:w-md w-full"
        >
          <button type="submit" className="bg-transparent">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search movies..."
            className="focus:outline-none  "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}
