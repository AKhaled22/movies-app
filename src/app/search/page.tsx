"use client";
import { EmptyState } from "@/components/empty-state";
import { Section } from "@/components/section";
import { SectionSkeleton } from "@/components/section/loading";
import { useSearch } from "@/hooks/react-query/useSearch";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get("q") || "";
  const page = searchParams.get("page") || "1";
  const { data, isLoading, isError } = useSearch({
    title: title,
    page: page,
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
    <div className="px-7">
      <Section title="Search Results" movies={data} />
    </div>
  );
}
