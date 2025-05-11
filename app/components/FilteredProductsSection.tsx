import React, { useCallback, useContext, useEffect, useState } from "react";
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
import { FiltersContext } from "../contexts/FiltersContext";
import useFetch from "../hooks/useFetch";
import useProducts from "../hooks/useProducts";

const FilteredProductsSection = () => {
  const [selectedSortBy, setSelectedSortBy] = useState<SortOptions>(
    SortOptionEnum.created,
  );

  const { filters, clearFilters } = useContext(FiltersContext);
  const [showNoResult, setShowNoResult] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  const [fetchedProducts, setFetchedProducts] = useState<Array<Product>>([]);
  const { data, isLoading, isFetching, isError } = useProducts({ filters, selectedSortBy });

  useEffect(() => {
    if (!isLoading && !isFetching) {
      if (!isError && data && data.length >= 1) {
        setFetchedProducts(data);
      } else {
        displayShowNoResult();
      }
    } else {
      hideShowNoResult();
    }
  }, [isLoading, data, isFetching, isError, fetchedProducts]);

  const toggleSortByDropdown = () => setShowSortByDropdown((prev) => !!!prev);

  const closeFilter = () => setShowFilter(false);
  const openFilter = () => setShowFilter(true);

  const displayShowNoResult = () => {
    setShowNoResult(true);
  };

  const hideShowNoResult = () => {
    setShowNoResult(false);
  };

  const updateSortByOption = (sortOption: SortOptions) => {
    setSelectedSortBy(sortOption);
  };

  return (
    <section className="flex gap-8 flex-col col-span-full containerMax:col-span-9 min-h-[950px]">
      <div className="flex justify-between items-center containerMax:justify-end col-span-full containerMax:col-span-9 relative h-12">
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
          className={`flex items-center gap-1 px-3.5 py-2.5 rounded relative ${showNoResult && "containerMax:hidden"}`}
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
          showFilter={showFilter}
          closeFilter={closeFilter}
        ></FilterDrawer>
      </div>
      {showNoResult ? (
        <NoProductsFound clearFilters={clearFilters} />
      ) : (
        <ProductGrid
          filters={filters}
          selectedSortBy={selectedSortBy}
          products={fetchedProducts}
        />
      )}
    </section>
  );
};

export default FilteredProductsSection;
