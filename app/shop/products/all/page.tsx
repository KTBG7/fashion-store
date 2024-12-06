"use client";

import CustomButton from "@/app/components/atoms/CustomButton";
import FilterOptions from "@/app/components/molecules/FilterOptions";
import PageContainer from "@/app/components/PageContainer";
import ProductGrid from "@/app/components/ProductGrid";
import ProductGridSkeleton from "@/app/components/ProductGridSkeleton";
import SortByDropdown from "@/app/components/SortByDropdown";
import { SortOptionEnum, SortOptions } from "@/app/constants";
import FilterDrawer from "@/app/organisms/FilterDrawer";
import { FilterState } from "@/app/types";
import { Suspense, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiFilterLine } from "react-icons/ri";

const Page = () => {
  const [filters, setFilters] = useState<FilterState>({
    collection: new Map(),
    category: new Map(),
    color: new Map(),
    rating: new Map(),
  });

  const [selectedSortBy, setSelectedSortBy] = useState<SortOptions>(
    SortOptionEnum.created,
  );

  const [showFilter, setShowFilter] = useState(false);
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  const toggleSortByDropdown = () => setShowSortByDropdown((prev) => !!!prev);

  const closeFilter = () => setShowFilter(false);
  const openFilter = () => setShowFilter(true);

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

  const updateSortByOption = (sortOption: SortOptions) => {
    setSelectedSortBy(sortOption);
  };

  return (
    <>
      <PageContainer>
        <FilterOptions
          updateFilters={updateFilters}
          drawer={false}
        ></FilterOptions>
        <div className="no-padding-container col-span-full containerMax:col-span-9 gap-8">
          <div className="flex justify-between items-center containerMax:justify-end col-span-full relative">
            <CustomButton
              variant="White"
              label="Filter Button"
              needsSpan={false}
              className="flex items-center gap-1 px-3.5 py-2.5 rounded containerMax:hidden"
              onClick={openFilter}
            >
              <RiFilterLine className="w-5 h-5"></RiFilterLine>
              <span className="px-0.5 text-neutral-900 font-medium">
                Filter
              </span>
            </CustomButton>

            <CustomButton
              variant="White"
              label="Sort By Button"
              needsSpan={false}
              className="flex items-center gap-1 px-3.5 py-2.5 rounded relative"
              onClick={toggleSortByDropdown}
            >
              <span className="px-0.5 text-neutral-900 font-medium">
                Sort by
              </span>

              <FiChevronDown className="w-5 h-5"></FiChevronDown>
            </CustomButton>

            <SortByDropdown
              showDropdown={showSortByDropdown}
              sortByOption={selectedSortBy}
              updateSortByOption={updateSortByOption}
            ></SortByDropdown>
            <FilterDrawer
              updateFilters={updateFilters}
              showFilter={showFilter}
              closeFilter={closeFilter}
            ></FilterDrawer>
          </div>
          <div className="col-span-full">
            <ProductGrid filters={filters} selectedSortBy={selectedSortBy} />
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Page;
