import React, { useContext, useEffect, useState } from "react";
import CouponButton from "./CouponButton";
import CustomButton from "./atoms/CustomButton";
import { UserContext } from "../contexts/UserContext";

const CartSummary = () => {
  const [discount, setDiscount] = useState(0);
  const { user } = useContext(UserContext);

  let subtotal = 0;
  const calculateSubtotal = () => {
    let newSubtotal = 0;
    user.cart.forEach((product) => {
      if (product.inventory && product.quantity) {
        if (product.inventory.discount_percentage) {
          newSubtotal += product.quantity * product.inventory.sale_price;
        } else {
          newSubtotal += product.quantity * product.inventory.list_price;
        }
      }
    });
    subtotal = newSubtotal;
  };

  useEffect(() => {
    calculateSubtotal();
  }, [user.cart]);
  calculateSubtotal();

  return (
    <section className="gap-4 p-4 tablet:p-8 flex flex-col border border-neutral-200 rounded-lg col-span-full containerMax:col-span-4">
      <h3 className="font-semibold text-2xl">Order Summary</h3>
      <div className="flex flex-col gap-8 containerMax:gap-4">
        <div className="flex justify-between items-center">
          <span className="text-neutral-600 text-base">Subtotal</span>
          <span className="text-neutral-900 font-semibold text-lg">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-neutral-600 text-base">Shipping</span>
          <span className="text-neutral-900 font-semibold text-lg">FREE</span>
        </div>
        <CouponButton subtotal={subtotal} setDiscount={setDiscount} />
      </div>
      <hr className="border-dotted my-4" />
      <div className="flex justify-between flex-wrap">
        <span className="text-2xl font-medium text-neutral-900">Total</span>
        <span className=" text-4xl font-semibold text-neutral-900">
          ${(subtotal - discount).toFixed(2)}
        </span>
      </div>
      <CustomButton
        localLink="/checkout"
        variant="Purple"
        className="py-4 text-lg font-medium"
        label="Checkout button"
      >
        Checkout
      </CustomButton>
    </section>
  );
};

export default CartSummary;
