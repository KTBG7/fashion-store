import { Product, ProductImage, ProductInventory } from "@/app/types";

type ProductSearcherFunction = (
  product: Product,
  color: string,
  size: string | number,
) => { productImage: ProductImage; productInventory: ProductInventory };

export const productSearcher: ProductSearcherFunction = (
  product: Product,
  color: string,
  size: string | number,
) => {
  const productImage: ProductImage = product.images.find((img) => {
    if (img.color === color) return true;
    return false;
  })!;
  const productInventory: ProductInventory = product.inventory.find(
    (inventory) => {
      if (color === inventory.color && inventory.size === size) {
        return true;
      }
      return false;
    },
  )!;
  return { productImage, productInventory };
};
