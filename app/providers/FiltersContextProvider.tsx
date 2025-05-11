import React, { PropsWithChildren, useState } from "react";
import { FilterState } from "../types";
import { FiltersContext } from "../contexts/FiltersContext";

const FiltersContextProvider = ({ children }: PropsWithChildren) => {
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
    filters.rating.clear();
    filters.category.clear();
    filters.color.clear();
    filters.collection.clear();
    setFilters({ ...filters });
  };
  return (
    <FiltersContext.Provider value={{ filters, clearFilters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
