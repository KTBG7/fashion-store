import React, {
  Suspense,
  useCallback,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import ProductTile from "./ProductTile";
import { FilterState, Product } from "../types";
import { API_ENDPOINTS, SortByOptions, SortOptions } from "../constants";
import ProductGridSkeleton from "./ProductGridSkeleton";
type ProductGridProps = {
  filters?: FilterState;
  selectedSortBy?: SortOptions;
};
const ProductGrid = ({ filters, selectedSortBy }: ProductGridProps) => {
  const [products, setProducts] = useState<Array<Product>>([]);

  const deferredProducts = useDeferredValue(products);

  const fetchProducts = useCallback(async () => {
    if (filters && selectedSortBy) {
      let filteredEndpoint = API_ENDPOINTS.products;
      let selectedFilters = Object.entries(filters).filter((filterOption) =>
        filterOption[1].size ? filterOption : false,
      );
      if (selectedFilters.length > 0) {
        selectedFilters.forEach((currentFilter, idx) => {
          if (idx === 0) {
            filteredEndpoint += `?${currentFilter[0]}=`;
          } else {
            filteredEndpoint += `&${currentFilter[0]}=`;
          }
          currentFilter[1].forEach((filter) => {
            if (filteredEndpoint.charAt(filteredEndpoint.length - 1) === "=") {
              filteredEndpoint += filter;
            } else {
              filteredEndpoint += `&${currentFilter[0]}=${filter}`;
            }
          });
        });
        filteredEndpoint += `&sort=${SortByOptions[selectedSortBy].value}&direction=${SortByOptions[selectedSortBy].direction}`;
      } else {
        filteredEndpoint += `?sort=${SortByOptions[selectedSortBy].value}&direction=${SortByOptions[selectedSortBy].direction}`;
      }

      const data = await fetch(filteredEndpoint);
      const result = await data.json();
      if (!result.error) {
        setProducts(result.data);
      }
    } else {
      const data = await fetch(API_ENDPOINTS.products);
      const result = await data.json();

      if (!result.error) {
        setProducts(result.data);
      }
    }
  }, [filters, selectedSortBy]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (products.length < 1) {
    return (
      <ProductGridSkeleton filters={filters} selectedSortBy={selectedSortBy} />
    );
  }

  return (
    <section
      className={`col-span-full custom-col-container gap-8 h-fit grid-cols-4 tablet:grid-cols-6 ${!filters && !selectedSortBy ? "containerMax:grid-cols-12" : "containerMax:grid-cols-9"}`}
    >
      {deferredProducts.map((product: any, idx: number) => {
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
