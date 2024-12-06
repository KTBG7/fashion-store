import { SortOptions } from "../constants";
import { FilterState } from "../types";
import CustomButton from "./atoms/CustomButton";
import ProductTileSkeleton from "./ProductTileSkeleton";

type ProductGridSkeletonProps = {
  filters?: FilterState;
  selectedSortBy?: SortOptions;
};

const ProductGridSkeleton = ({
  filters,
  selectedSortBy,
}: ProductGridSkeletonProps) => {
  return (
    <section
      className={`col-span-full custom-col-container h-fit grid-cols-4 tablet:grid-cols-6 ${!filters && !selectedSortBy ? "containerMax:grid-cols-12" : "containerMax:grid-cols-9"}`}
    >
      <ProductTileSkeleton />
      <ProductTileSkeleton />
      <ProductTileSkeleton />
      <ProductTileSkeleton />
      <ProductTileSkeleton />
      <ProductTileSkeleton />
      <ProductTileSkeleton />
    </section>
  );
};

export default ProductGridSkeleton;
