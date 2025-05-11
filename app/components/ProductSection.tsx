import { useCallback, useEffect, useMemo, useState } from "react";
import ProductDetailsSection from "@/app/components/ProductDetailsSection";
import ProductImageSection from "@/app/components/ProductImageSection";
import { Product, ProductImage, ProductInventory } from "@/app/types";
import React from "react";
import { productSearcher } from "../utils/helperFunctions";
import ProductSpecificationsSection from "./ProductSpecificationsSection";
import ProductCollectionSection from "./ProductCollectionSection";
import { useQuery } from "@tanstack/react-query";
import useFetch from "../hooks/useFetch";

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
  const { fetchProduct } = useFetch();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["fetchProduct" + productId],
    queryFn: () => fetchProduct(productId),
  });
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (data && !isLoading && !isFetching) {
      setProduct(data);
    }
  }, [data, isLoading, isFetching]);

  useEffect(() => {
    if (product) {
      const img = product.images.find(
        (img) => img.color === product.inventory[0].color,
      )!;
      setSelectedColor(product.inventory[0].color);

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

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    if (selectedProductDetails) {
      if (selectedColor === selectedProductDetails.inventory.color) {
        return;
      }
      if (product) {
        const { productImage, productInventory } = productSearcher(
          product,
          selectedColor,
          selectedProductDetails.inventory.size,
        );
        setSelectedProductDetails({
          image: productImage,
          inventory: productInventory,
        });
      }
    }
  }, [selectedColor, product, selectedProductDetails]);
  return (
    <div className="col-span-full no-padding-container gap-y-12 ">
      {!isLoading &&
        !isFetching &&
        product &&
        selectedProductDetails &&
        selectedColor &&
        currentImage ? (
        <>
          <ProductImageSection
            selectedColor={selectedColor}
            images={product.images}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            productName={product.name}
          />
          <ProductDetailsSection
            selectedColor={selectedColor}
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
