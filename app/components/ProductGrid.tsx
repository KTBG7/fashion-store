import ProductTile from "./ProductTile";
import { FilterState, Product } from "../types";
import { SortOptions } from "../constants";
import ProductGridSkeleton from "./ProductGridSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
type ProductGridProps = {
  products?: Array<Product>;
  filters?: FilterState;
  selectedSortBy?: SortOptions;
  disableQuery?: boolean;
};
const ProductGrid = ({
  filters,
  selectedSortBy,
  disableQuery = false,
  products = [],
}: ProductGridProps) => {
  const [fetchedProducts, setFetchedProducts] =
    useState<Array<Product>>(products);
  const { fetchProducts } = useFetch();
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["productGridQuery" + `${filters ? "Filters" : "Latest"}`],
    queryFn: () => fetchProducts(filters, selectedSortBy),
    enabled: !disableQuery,
  });

  useEffect(() => {
    if (filters || selectedSortBy) {
      refetch();
    }
  }, [filters, selectedSortBy, refetch]);

  useEffect(() => {
    if (!isLoading && !isFetching && !isError && data && data.length >= 1) {
      setFetchedProducts(data);
    }
  }, [isLoading, data, isFetching, isError, fetchedProducts]);
  return (
    <>
      {isLoading ||
        isFetching ||
        isError ||
        !data?.length ||
        (data?.length && data?.length < 1) ? (
        <ProductGridSkeleton
          filters={filters}
          selectedSortBy={selectedSortBy}
        />
      ) : (
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
      )}
    </>
  );
};

export default ProductGrid;
