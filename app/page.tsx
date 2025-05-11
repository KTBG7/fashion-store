"use client";
import CollectionsSection from "./components/CollectionsSection";
import CustomButton from "./components/atoms/CustomButton";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="col-span-full w-full">
        <div className="flex w-full pb-8 justify-between items-center col-span-full">
          <h3 className="text-2xl tablet:text-3xl font-semibold">
            Latest Arrivals
          </h3>
          <CustomButton
            variant="Secondary"
            localLink="/shop/products/all"
            role="link"
            label="View All"
            className="rounded"
          >
            View all
          </CustomButton>
        </div>
        <ProductGrid />
      </section>
      <CollectionsSection />
      <FeaturesSection />
    </>
  );
}
