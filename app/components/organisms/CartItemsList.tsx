import React from "react";
import { SelectedProduct } from "../../types";
import CartItem from "../molecules/CartItem";
import useCartItems from "@/app/hooks/useCartItems";

const CartItemsList = () => {
  const cartItems = useCartItems();
  if (cartItems.length > 0) {
    return (
      <section className="col-span-full max-containerMax:pb-16  containerMax:col-span-8">
        <ul className="flex flex-col gap-8">
          {cartItems.map(
            (product: SelectedProduct, idx) => {
              return (
                <CartItem
                  product={product}
                  idx={idx}
                  key={idx}
                />
              );
            },
          )}
        </ul>
      </section>
    );
  }
};

export default CartItemsList;
