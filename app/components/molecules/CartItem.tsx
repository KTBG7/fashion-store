import { COLORS, PRODUCT_SIZES } from "@/app/constants";
import { Product, SelectedProduct } from "@/app/types";
import Image from "next/image";
import React from "react";
import QuantityButton from "../QuantityButton";
import CustomButton from "../atoms/CustomButton";

type CartItemProps = {
  idx: number;
  product: SelectedProduct;
  decreaseQuantity: (product: SelectedProduct) => void;
  increaseQuantity: (product: SelectedProduct) => void;
  removeProductFromCart: (sku: string) => void;
};

const CartItem = ({
  idx,
  product,
  decreaseQuantity,
  increaseQuantity,
  removeProductFromCart,
}: CartItemProps) => {
  return (
    <li
      className={`flex max-tablet:flex-wrap gap-4 tablet:gap-8 relative ${idx !== 0 ? "border-t pt-8 border-dotted border-t-neutral-300" : ""}`}
      key={idx}
    >
      <Image
        alt={product.name}
        src={product.image.image_url}
        height={200}
        width={280}
        className="rounded-lg object-center max-tablet:w-full tablet:min-w-[280px] h-[200px] object-cover"
      />
      <div className="flex flex-col gap-4 w-full flex-wrap">
        <h4 className=" text-2xl font-medium text-neutral-900 max-w-full">
          {product.name}
        </h4>
        <span className="text-base font-medium max-w-full text-neutral-600">
          {COLORS[product.inventory.color].label} •{" "}
          {isNaN(Number(product.inventory.size))
            ? PRODUCT_SIZES[product.inventory.size].label
            : product.inventory.size
              ? product.inventory.size
              : "One Size"}
        </span>
        <p className="text-neutral-600 text-sm max-w-full">
          {product.description}
        </p>
        <div className="flex flex-grow max-w-full flex-wrap">
          <QuantityButton
            quantity={product.quantity}
            stock={product.inventory.stock}
            decreaseQuantity={() => decreaseQuantity(product)}
            increaseQuantity={() => increaseQuantity(product)}
          />
          <CustomButton
            variant="Tertiary"
            label="Remove Item"
            className="text-neutral-600 justify-start max-tablet:flex-grow h-9 px-4 text-sm font-medium"
            onClick={() => removeProductFromCart(product.inventory.sku)}
          >
            Remove
          </CustomButton>
          <div className="flex flex-grow justify-end items-center ">
            {product.inventory.discount_percentage ? (
              <>
                <span className="text-lg text-neutral-900 font-medium pr-2">
                  ${product.inventory.sale_price}
                </span>
                <span className="text-xs text-neutral-600 line-through">
                  ${product.inventory.list_price}
                </span>
              </>
            ) : (
              <>
                <span className="text-lg text-neutral-900 ">
                  ${product.inventory.list_price}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
