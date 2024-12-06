"use client";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import CartItemsList from "../components/organisms/CartItemsList";
import CartSummary from "../components/CartSummary";
import { UserContext } from "../contexts/UserContext";
import EmptyCart from "../components/EmptyCart";

const page = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <div className="w-full px-4 bg-transparent">
        <main className="flex flex-col items-center justify-center w-full bg-white rounded-lg max-containerMax:px-4 py-12 tablet:py-16 containerMax:py-24 px-3 tablet:px-4 containerMax:px-24">
          <div className="no-padding-container w-full gap-12 tablet:gap-16">
            <h2 className="text-3xl tablet:text-5xl col-span-full self-start font-semibold text-neutral-900">
              Shopping Cart
            </h2>
            <div className="no-padding-container col-span-full">
              {user.cart.size < 1 ? (
                <EmptyCart />
              ) : (
                <>
                  <CartItemsList />
                  <CartSummary />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
