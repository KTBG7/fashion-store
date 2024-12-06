export type Category = {
  category_id: string;
  name: string;
  created: string;
};

export type Collection = {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
};

export type ProductImage = {
  color: string;
  image_url: string;
};

export type ProductInventory = {
  sku: string;
  color: string;
  size: string | number;
  list_price: number;
  discount: boolean | null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
};

export type SelectedProduct = {
  image: ProductImage;
  inventory: ProductInventory;
  description: string;
  name: string;
  quantity: number;
};

export type FilterState = {
  collection: Map<string, string>;
  category: Map<string, string>;
  color: Map<string, string>;
  rating: Map<string, string>;
};

export type ProductInfo = {
  description: Array<string>;
  title: string;
};

export type Product = {
  product_id: string;
  name: string;
  description: string;
  category: Category;
  collection: Collection;
  created_at: string;
  colors: Array<string>;
  images: Array<ProductImage>;
  inventory: Array<ProductInventory>;
  priceRange: {
    highest: number;
    lowest: number;
  };
  rating: number;
  reviews: number;
  sizes: Array<number>;
  sold: number;
  info: Array<ProductInfo>;
};
