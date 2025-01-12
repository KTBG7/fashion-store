import { API_ENDPOINTS, SortByOptions, SortOptions } from "../constants";
import axios from "axios";
import { FilterState } from "../types";

export const fetchLatestProducts = async () => {
  const res = await axios.get(
    API_ENDPOINTS.products + "?collection=latest&per_page=8",
  );
  return res.data.data;
};

export const fetchLatestCollections = async () => {
  const result = await axios.get(API_ENDPOINTS.latestCollections);
  return result.data.data;
};

export const fetchCurrentCollection = async (collection: string) => {
  const response = await axios.get(API_ENDPOINTS.collection + collection);
  return response.data.data;
};

export const fetchProduct = async (productId: string) => {
  const result = await axios.get(API_ENDPOINTS.products + "/" + productId);
  return result.data;
};

export const fetchCollections = async () => {
  const result = await axios.get(API_ENDPOINTS.collectionsGrid);
  return result.data.data;
};

export const fetchProducts = async (
  filters: FilterState | undefined,
  selectedSortBy: SortOptions | undefined,
) => {
  if (filters && selectedSortBy) {
    let filteredEndpoint = API_ENDPOINTS.products;
    const selectedFilters = Object.entries(filters).filter((filterOption) =>
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

    const res = await axios.get(filteredEndpoint);
    return res.data.data;
  } else {
    return fetchLatestProducts();
  }
};
