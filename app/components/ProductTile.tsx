import CustomButton from "./atoms/CustomButton";
import { Product } from "../types";
import Image from "next/image";
import { COLORS } from "../constants";
import ColorButton from "./ColorButton";
import { Suspense } from "react";

type ProductTileProps = {
  product: Product;
};

const ProductTile = ({ product }: ProductTileProps) => {
  const image = product.images[0];
  const inventory = product.inventory[0];

  return (
    <CustomButton
      label={product.name}
      role="link"
      variant="Product"
      localLink={"/shop/products/" + product.product_id}
    >
      <div className="relative flex object-cover rounded w-full h-[300px]">
        <Suspense
          fallback={
            <div className="bg-neutral-200 blur-3xl transition-colors from-neutral-200 to-neutral-300 ease-linear transform"></div>
          }
        >
          <Image
            quality={100}
            priority
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 1312px) 100vw, 280px"
            src={image.image_url}
            alt={product.name}
          ></Image>
        </Suspense>
      </div>

      <div className="pt-4">
        <h4 className="text-xs text-neutral-600">
          {COLORS[image.color].label}
        </h4>
        <h3 className="text-lg text-neutral-900">{product.name}</h3>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          {inventory.discount_percentage ? (
            <>
              <span className="text-neutral-500 text-lg">
                ${inventory?.sale_price}
              </span>
              <span className="text-xs text-neutral-600 line-through">
                ${inventory?.list_price}
              </span>
            </>
          ) : (
            <>
              <span className="text-lg text-neutral-600">
                ${inventory?.list_price}
              </span>
            </>
          )}
        </div>
        <div className="pl-1 flex gap-2 flex-wrap pb-[30px]">
          {product.colors.map((color: string, idx) => (
            <ColorButton
              color={color}
              key={idx}
              idx={idx}
              productName={product.name}
              disabled
            />
          ))}
        </div>
      </div>
    </CustomButton>
  );
};

export default ProductTile;
