export type CustomRecord = Record<string, { value: string; label: string }>;

export type SortOptions =
  | "created"
  | "lowToHigh"
  | "highToLow"
  | "rating"
  | "popularity";

export interface ISortOptions {
  [key: string]: SortOptions;
}

export const SortOptionEnum: ISortOptions = {
  created: "created",
  lowToHigh: "lowToHigh",
  highToLow: "highToLow",
  rating: "rating",
  popularity: "popularity",
};

export const SortByOptions: Record<
  SortOptions,
  { value: string; label: string; direction: string }
> = {
  created: { value: "created", label: "Newest", direction: "desc" },
  lowToHigh: { value: "price", label: "Price: Low to high", direction: "asc" },
  highToLow: { value: "price", label: "Price: High to low", direction: "desc" },
  rating: { value: "rating", label: "Best rating", direction: "desc" },
  popularity: { value: "popularity", label: "Most popular", direction: "desc" },
};

export const COLLECTIONS: CustomRecord = {
  latest: { value: "latest", label: "Latest arrivals" },
  urban: { value: "urban", label: "Urban Oasis" },
  cozy: { value: "cozy", label: "Cozy Comfort" },
  fresh: { value: "fresh", label: "Fresh Fusion" },
};

export const COLORS: CustomRecord = {
  white: { value: "#fff", label: "White" },
  black: { value: "#000", label: "Black" },
  red: { value: "#DC2626", label: "Red" },
  orange: { value: "#EA580C", label: "Orange" },
  yellow: { value: "#F59E0B", label: "Yellow" },
  green: { value: "#10B981", label: "Green" },
  blue: { value: "#4F46E5", label: "Blue" },
  brown: { value: "#CA8A04", label: "Brown" },
  beige: { value: "#d2b08a", label: "Beige" },
  pink: { value: "#EC4899", label: "Pink" },
};

export const PRODUCT_SIZES: CustomRecord = {
  xs: { value: "xs", label: "XS" },
  sm: { value: "sm", label: "S" },
  md: { value: "md", label: "M" },
  lg: { value: "lg", label: "L" },
  xl: { value: "xl", label: "XL" },
  one: { value: "one", label: "One Size" },
};

export enum ShippingOptions {
  Standard = "Standard",
  Express = "Express",
}

export const CATEGORIES: CustomRecord = {
  unisex: { value: "unisex", label: "Unisex" },
  women: { value: "women", label: "Women" },
  men: { value: "men", label: "Men" },
};

export const RATINGS: CustomRecord = {
  five: { value: "5", label: "Five" },
  four: { value: "4", label: "Four" },
  three: { value: "3", label: "Three" },
  two: { value: "2", label: "Two" },
  one: { value: "1", label: "One" },
};

export const FILTER_OPTIONS: Record<
  string,
  { value: string; label: string; items: CustomRecord }
> = {
  collection: {
    value: "collection",
    label: "Collections",
    items: COLLECTIONS,
  },
  category: { value: "category", label: "Category", items: CATEGORIES },
  color: { value: "color", label: "Colors", items: COLORS },
  rating: { value: "rating", label: "Rating", items: RATINGS },
};

export const FILTER_MAP = {
  collection: {
    value: "collection",
    label: "Collections",
    items: COLLECTIONS,
  },
  category: { value: "category", label: "Category", items: CATEGORIES },
  color: { value: "color", label: "Colors", items: COLORS },
  rating: { value: "rating", label: "Rating", items: RATINGS },
};

export const API_ENDPOINTS = {
  products:
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products",
  latestCollections:
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections?collection=latest",
  collectionsGrid:
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections?collection=latest",
  collection:
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=",
};
