"use client";
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutForm from "../components/CheckoutForm";
import CustomButton from "../components/atoms/CustomButton";
import { FiChevronLeft } from "react-icons/fi";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  // useEffect(() => {
  //   if (user.cart.size < 1) {
  //     router.push("/cart");
  //   }
  // }, []);
  return (
    <>
      <div className="no-padding-container w-full gap-8 ">
        <CustomButton
          localLink="/cart"
          label="Back to Shopping Cart"
          variant="Footer"
          role="link"
          needsSpan={false}
          className="col-span-full text-sm font-medium text-indigo-700 fill-indigo-700"
        >
          <FiChevronLeft className="inline w-6 h-6 mr-1 " />
          Back to Shopping Cart
        </CustomButton>
        <h2 className="text-2xl tablet:text-3xl containerMax:text-4xl col-span-full pb-8 font-semibold">
          Checkout
        </h2>
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </>
  );
};

export default Checkout;
