import { useCallback, useEffect, useState } from "react";
import { Collection, Product } from "../types";
import ProductTile from "./ProductTile";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentCollection } from "../utils/apiHelper";

type ProductCollectionSectionProps = {
  collection: string;
  product_id: string;
};

const ProductCollectionSection = ({
  collection,
  product_id,
}: ProductCollectionSectionProps) => {
  const [currentCollection, setCurrentCollection] = useState<Array<Product>>();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["productCollection" + product_id],
    queryFn: () => fetchCurrentCollection(collection),
  });

  const filterProducts = useCallback(
    (products: Array<Product>) => {
      const filteredCollectionProducts = [];
      let i = 0;
      while (filteredCollectionProducts.length < 4 && i < products.length) {
        let currentProduct = products[i];
        if (currentProduct.product_id !== product_id) {
          filteredCollectionProducts.push(currentProduct);
        }
        i++;
      }
      setCurrentCollection(filteredCollectionProducts);
    },
    [product_id],
  );

  useEffect(() => {
    if (data && !isLoading && !isFetching) {
      setCurrentCollection(data);
    }
  }, [data, isFetching, isLoading]);
  if (!currentCollection || isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <section className="col-span-full pb-12 tablet:pb-16 containerMax:pb-24">
      <h2 className="text-3xl font-semibold pb-8">In this Collection</h2>
      <ul className="flex gap-8 no-padding-container">
        {currentCollection.map((product, idx) => (
          <li key={idx} className="col-span-4 tablet:col-span-3">
            <ProductTile product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductCollectionSection;
