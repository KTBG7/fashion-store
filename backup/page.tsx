"use client";
import CollectionsSection from "./components/CollectionsSection";
import CustomButton from "./components/atoms/CustomButton";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Product } from "./types";
import { fetchLatestProducts } from "./utils/apiHelper";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 bg-transparent">
        <main className="flex flex-col items-center gap-24 tablet:gap-32 containerMax:gap-48 w-full bg-white rounded-lg max-containerMax:px-4 py-12 tablet:py-16 containerMax:py-24">
          <HeroSection />
          <div className="no-padding-container h-fit w-full containerMax:px-8">
            <div className="flex pb-8 justify-between items-center col-span-full">
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
          </div>
          <CollectionsSection />
          <FeaturesSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
