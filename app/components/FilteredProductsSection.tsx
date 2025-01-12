import { Props } from "next/script";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiFilterLine } from "react-icons/ri";
import FilterDrawer from "../organisms/FilterDrawer";
import CustomButton from "./atoms/CustomButton";
import NoProductsFound from "./NoProductsFound";
import ProductGrid from "./ProductGrid";
import SortByDropdown from "./SortByDropdown";
import { SortOptions, SortOptionEnum } from "../constants";
import { FilterState, Product } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../utils/apiHelper";

type FilteredProductsSectionProps = {
  updateFilters: (filterOption: string, value: string) => void;
  clearFilters: () => void;
  filters: FilterState;
};

const FilteredProductsSection = ({
  updateFilters,
  clearFilters,
  filters,
}: FilteredProductsSectionProps) => {
  const [selectedSortBy, setSelectedSortBy] = useState<SortOptions>(
    SortOptionEnum.created,
  );
  const [showNoResult, setShowNoResult] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  const [fetchedProducts, setFetchedProducts] = useState<Array<Product>>([]);
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["productGridQuery"],
    queryFn: () => fetchProducts(filters, selectedSortBy),
  });

  useEffect(() => {
    if (filters || selectedSortBy) {
      refetch();
    }
  }, [filters, selectedSortBy, refetch]);

  useEffect(() => {
    if (!isLoading && !isFetching && !isError && data) {
      setFetchedProducts(data);
    }
  }, [isLoading, data, isFetching, isError, fetchedProducts]);

  const toggleSortByDropdown = () => setShowSortByDropdown((prev) => !!!prev);

  const closeFilter = () => setShowFilter(false);
  const openFilter = () => setShowFilter(true);

  const displayShowNoResult = () => {
    setShowNoResult(true);
  };

  const hideShowNoResult = () => {
    clearFilters();
    setShowNoResult(false);
  };

  const updateSortByOption = (sortOption: SortOptions) => {
    setSelectedSortBy(sortOption);
  };
  if (
    !isFetching &&
    !isLoading &&
    fetchedProducts.length < 1 &&
    !showNoResult
  ) {
    displayShowNoResult();
  }

  return (
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
          <span className="px-0.5 text-neutral-900 font-medium">Filter</span>
        </CustomButton>
        <CustomButton
          variant="White"
          label="Sort By Button"
          needsSpan={false}
          className={`flex items-center gap-1 px-3.5 py-2.5 rounded relative ${showNoResult ?? "containerMax:hidden"}`}
          onClick={toggleSortByDropdown}
        >
          <span className="px-0.5 text-neutral-900 font-medium">Sort by</span>

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
        {showNoResult ? (
          <NoProductsFound hideShowNoResult={hideShowNoResult} />
        ) : (
          <ProductGrid
            displayShowNoResult={() => displayShowNoResult()}
            filters={filters}
            selectedSortBy={selectedSortBy}
            products={fetchedProducts}
          />
        )}
      </div>
    </div>
  );
};

export default FilteredProductsSection;
