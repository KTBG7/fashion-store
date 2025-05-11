"use client";

import FilteredProductsSection from "@/app/components/FilteredProductsSection";
import FilterOptions from "@/app/components/molecules/FilterOptions";
import FiltersContextProvider from "@/app/providers/FiltersContextProvider";

const Page = () => {
  return (
    <FiltersContextProvider>
      <FilterOptions drawer={false}></FilterOptions>
      <FilteredProductsSection />
    </FiltersContextProvider>
  );
};

export default Page;
