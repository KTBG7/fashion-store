import React from "react";
import shield from "@/public/shield-check-line.svg";
import truck from "@/public/truck-line.svg";
import exchange from "@/public/exchange-line.svg";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="no-padding-container containerMax:px-8 containerMax:gap-y-16">
      <div className="flex col-span-full flex-col text-center items-center justify-center pb-12 tablet:pb-16">
        <h4 className="text-base font-semibold text-indigo-700 pb-3 ">
          Elevate your Experience
        </h4>
        <h3 className="text-3xl tablet:text-5xl text-neutral-900 pb-5">
          Our Commitment to Exceptional Service
        </h3>
        <p className="text-neutral-600 text-xl">
          We pride ourselves on a foundation of exceptional customer service,
          where every interaction is a testament to our dedication to
          excellence.
        </p>
      </div>
      <div className="text-center gap-y-8 no-padding-container col-span-full">
        <div className="flex flex-col items-center gap-5 col-span-full containerMax:col-span-4">
          <div className="flex items-center justify-center rounded-full p-3 bg-white customShadow">
            <Image src={truck} alt="Truck Icon" />
          </div>
          <div className="flex gap-2 flex-col self-stretch items-center">
            <h4 className="text-xl text-neutral-900 font-semibold">
              Complimentary Shipping
            </h4>
            <span className="text-base font-normal text-neutral-600 text-center">
              Enjoy the convenience of free shipping for all orders. We believe
              in transparent pricing, and the price you see is the price you
              pay—no surprise fees
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 col-span-full containerMax:col-span-4">
          <div className="flex items-center justify-center rounded-full p-3 bg-white customShadow">
            <Image src={shield} alt="Shield Icon" />
          </div>

          <div className="flex gap-2 flex-col self-stretch items-center">
            <h4 className="text-xl text-neutral-900 font-semibold pb-2">
              2-Year Quality Promise
            </h4>
            <span className="text-base text-neutral-600">
              Shop with confidence knowing that we stand behind our products.
              Should any issue arise within the first two years, rest assured
              we're here to help with a hassle-free replacement.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 col-span-full containerMax:col-span-4">
          <div className="flex items-center justify-center rounded-full p-3 bg-white customShadow">
            <Image src={exchange} alt="Exchange Icon" />
          </div>

          <div className="flex gap-2 flex-col self-stretch items-center">
            <h4 className="text-xl text-neutral-900 font-semibold pb-2">
              Easy Exchanges
            </h4>
            <span className="text-base text-neutral-600">
              If your purchase isn't quite right, pass it on to a friend who
              might love it, and let us know. We're happy to facilitate an
              exchange to ensure you have the perfect item to complement your
              lifestyle.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
