"use client";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutForm from "../components/CheckoutForm";
import CustomButton from "../components/atoms/CustomButton";
import { FiChevronLeft } from "react-icons/fi";

const page = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  // useEffect(() => {
  //   if (user.cart.size < 1) {
  //     router.push("/cart");
  //   }
  // }, []);
  return (
    <>
      <Navbar />
      <div className="w-full px-4 bg-transparent">
        <main className="flex flex-col items-center gap-12 tablet:gap-16 w-full bg-white rounded-lg max-containerMax:px-4 py-12 tablet:py-16 containerMax:py-24 px-3 tablet:px-4 containerMax:px-24">
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
        </main>
      </div>
    </>
  );
};

export default page;
