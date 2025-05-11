import { useQuery } from "@tanstack/react-query";
import { SortOptions } from "../constants";
import { FilterState } from "../types";
import useFetch from "./useFetch";
import { useEffect } from "react";

type UseProductsProps = {
  filters: FilterState | undefined;
  selectedSortBy: SortOptions | undefined;
}

const useProducts = ({ filters, selectedSortBy }: UseProductsProps) => {
  const { fetchProducts } = useFetch();
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["productGridQuery"],
    queryFn: () => fetchProducts(filters, selectedSortBy),
  });
  useEffect(() => {
    if (filters || selectedSortBy) {
      refetch();
    }
  }, [filters, selectedSortBy, refetch])
  return {
    data, isLoading, isFetching, isError
  }
}

export default useProducts
