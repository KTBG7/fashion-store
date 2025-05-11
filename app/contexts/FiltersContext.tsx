"use client";
import { createContext } from "react";
import { FilterState } from "../types";

export type FilterContextType = {
  filters: FilterState;
  updateFilters: (filterOption: string, value: string) => void;
  clearFilters: () => void;
};
export const FiltersContext = createContext<FilterContextType>({
  filters: {
    collection: new Map(),
    category: new Map(),
    color: new Map(),
    rating: new Map(),
  },
  updateFilters: () => {},
  clearFilters: () => {},
});
