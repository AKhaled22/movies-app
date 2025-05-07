"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React from "react";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      router.push(createPageURL(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      router.push(createPageURL(currentPage + 1));
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`rounded-full py-2 px-4 bg-[#ffffff33] ${
          currentPage === 1
            ? "opacity-40"
            : "hover:bg-[#ffffff66] cursor-pointer"
        }`}
      >
        <FiChevronLeft size={20} />
      </button>
    );

    // Page numbers
    if (startPage > 1) {
      pages.push(
        <span key="start-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => router.push(createPageURL(i))}
          className={`rounded-full w-8 h-8 flex items-center justify-center ${
            i === currentPage
              ? "bg-white text-black font-bold"
              : "bg-[#ffffff33] text-white hover:bg-[#ffffff66] cursor-pointer"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <span key="end-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`rounded-full py-2 px-4 bg-[#ffffff33] ${
          currentPage === totalPages
             ? "opacity-40"
            : "hover:bg-[#ffffff66] cursor-pointer"
        }`}
      >
        <FiChevronRight size={20} />
      </button>
    );

    return pages;
  };

  return (
    <div className="flex justify-center items-center w-full h-full my-8">
      <div className="flex items-center justify-center gap-2">
        {renderPageNumbers()}
      </div>
    </div>
  );
};
