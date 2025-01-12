import ProductTile from "./ProductTile";
import { FilterState, Product } from "../types";
import { SortOptions } from "../constants";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { fetchProducts } from "../utils/apiHelper";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
type ProductGridProps = {
  displayShowNoResult?: () => void;
  products?: Array<Product>;
  filters?: FilterState;
  selectedSortBy?: SortOptions;
  disableQuery?: boolean;
};
const ProductGrid = ({
  displayShowNoResult = () => {},
  filters,
  selectedSortBy,
  disableQuery = false,
  products = [],
}: ProductGridProps) => {
  const [fetchedProducts, setFetchedProducts] =
    useState<Array<Product>>(products);
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["productGridQuery"],
    queryFn: () => fetchProducts(filters, selectedSortBy),
    enabled: disableQuery,
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
  if (disableQuery || isFetching || isLoading) {
    return (
      <ProductGridSkeleton filters={filters} selectedSortBy={selectedSortBy} />
    );
  }
  return (
    <section
      className={`col-span-full custom-col-container gap-8 h-fit grid-cols-4 tablet:grid-cols-6 ${!filters && !selectedSortBy ? "containerMax:grid-cols-12" : "containerMax:grid-cols-9"}`}
    >
      {fetchedProducts.length >= 1 &&
        fetchedProducts.map((product: Product, idx: number) => {
          return (
            <li
              key={idx}
              className="w-full list-none col-span-full tablet:col-span-3"
            >
              <ProductTile product={product} />
            </li>
          );
        })}
    </section>
  );
};

export default ProductGrid;
