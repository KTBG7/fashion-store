"use client";

import FilteredProductsSection from "@/app/components/FilteredProductsSection";
import FilterOptions from "@/app/components/molecules/FilterOptions";
import PageContainer from "@/app/components/PageContainer";
import { FilterState } from "@/app/types";
import { useCallback, useState } from "react";

const Page = () => {
  const [filters, setFilters] = useState<FilterState>({
    collection: new Map(),
    category: new Map(),
    color: new Map(),
    rating: new Map(),
  });

  const updateFilters = (filterType: string, value: string) => {
    switch (filterType) {
      case "collection":
        if (filters.collection.has(value)) {
          filters.collection.delete(value);
        } else {
          filters.collection.set(value, value);
        }
        break;

      case "category":
        if (filters.category.has(value)) {
          filters.category.delete(value);
        } else {
          filters.category.set(value, value);
        }
        break;
      case "color":
        if (filters.color.has(value)) {
          filters.color.delete(value);
        } else {
          filters.color.set(value, value);
        }
        break;

      case "rating":
        if (filters.rating.has(value)) {
          filters.rating.delete(value);
        } else {
          filters.rating.set(value, value);
        }
        break;
    }

    setFilters({ ...filters });
  };
  const clearFilters = () => {
    setFilters({
      collection: new Map(),
      category: new Map(),
      color: new Map(),
      rating: new Map(),
    });
  };
  return (
    <>
      <PageContainer>
        <FilterOptions
          updateFilters={updateFilters}
          drawer={false}
        ></FilterOptions>
        <FilteredProductsSection
          filters={filters}
          updateFilters={updateFilters}
          clearFilters={clearFilters}
        />
      </PageContainer>
    </>
  );
};

export default Page;
