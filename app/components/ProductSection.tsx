import { useCallback, useEffect, useMemo, useState } from "react";
import ProductDetailsSection from "@/app/components/ProductDetailsSection";
import ProductImageSection from "@/app/components/ProductImageSection";
import {
  Product,
  ProductImage,
  ProductInventory,
  SelectedProduct,
} from "@/app/types";
import React from "react";
import { productSearcher } from "./utils/helperFunctions";
import ProductSpecificationsSection from "./ProductSpecificationsSection";
import ProductCollectionSection from "./ProductCollectionSection";

type ProductSectionProps = {
  productId: string;
};

type ProductVariant = {
  image: ProductImage;
  inventory: ProductInventory;
};

const ProductSection = ({ productId }: ProductSectionProps) => {
  const [product, setProduct] = useState<Product>();
  const [selectedProductDetails, setSelectedProductDetails] =
    useState<ProductVariant | null>();

  const [currentImage, setCurrentImage] = useState<ProductImage>();

  const fetchProduct = useMemo(
    () => async () => {
      const data = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/" +
          productId,
      );
      const result = await data.json();
      if (!result.error) {
        setProduct(result);
      }
    },
    [productId],
  );

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
    if (product) {
      const img = product.images.find(
        (img) => img.color === product.inventory[0].color,
      )!;

      setSelectedProductDetails({
        image: img,
        inventory: product.inventory[0],
      });
    }
  }, [product]);

  useEffect(() => {
    if (selectedProductDetails) {
      setCurrentImage(selectedProductDetails.image);
    }
  }, [selectedProductDetails]);

  const handleColorChange = useCallback(
    (color: string) => {
      if (selectedProductDetails) {
        if (color === selectedProductDetails.inventory.color) {
          return;
        }
        if (product) {
          const { productImage, productInventory } = productSearcher(
            product,
            color,
            selectedProductDetails.inventory.size,
          );
          setSelectedProductDetails({
            image: productImage,
            inventory: productInventory,
          });
        }
      }
    },
    [product, selectedProductDetails],
  );
  return (
    <div className="no-padding-container containerMax:pr-8 containerMax:pl-[28px] gap-y-12 ">
      {product && selectedProductDetails && currentImage ? (
        <>
          <ProductImageSection
            selectedColor={selectedProductDetails.inventory.color}
            images={product.images}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            productName={product.name}
          />
          <ProductDetailsSection
            image={currentImage}
            product={product}
            inventory={selectedProductDetails.inventory}
            changeColor={handleColorChange}
          />
          <ProductSpecificationsSection />
          <ProductCollectionSection
            collection={product.collection.collection_id}
            product_id={product.product_id}
          />
        </>
      ) : (
        <div>Loading Product...</div>
      )}
    </div>
  );
};

export default ProductSection;
