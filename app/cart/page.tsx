"use client";
import React, { useContext } from "react";
import CartItemsList from "../components/organisms/CartItemsList";
import CartSummary from "../components/CartSummary";
import { UserContext } from "../contexts/UserContext";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="no-padding-container col-span-full w-full gap-12 tablet:gap-16">
        <h2 className="text-3xl tablet:text-5xl col-span-full self-start font-semibold text-neutral-900">
          Shopping Cart
        </h2>
        {user.cart.size < 1 ? (
          <EmptyCart />
        ) : (
          <>
            <CartItemsList />
            <CartSummary />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
