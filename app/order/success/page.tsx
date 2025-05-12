"use client";

import CartItemsList from "@/app/components/organisms/CartItemsList";
import useCartValidation from "@/app/hooks/useCartValidation";
import testImg from "@/public/empty_cart.svg"
import Image from "next/image";


const Page = () => {
  useCartValidation();
  return (
    <>
      <Image className="col-span-full containerMax:col-span-6 w-full h-full" src={testImg} width={400} height={600} alt="nalgas" />
      <div className="col-span-full containerMax:col-span-6">
        <h2>Your order is confirmed.</h2>
        <p>Your order is now in the queue and being processed. We'll let you know when we ship it out!</p>
        <div>
          <span>Order Number</span>
          <span>{"order number"}</span>
        </div>
        <CartItemsList />
      </div>
    </>
  );
};

export default Page;
