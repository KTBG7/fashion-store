"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";
import ProductSection from "@/app/components/ProductSection";
import Footer from "@/app/components/Footer";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 bg-transparent">
        <main className="flex flex-col items-center gap-12 tablet:gap-16 containerMax:gap-24 w-full bg-white rounded-lg max-containerMax:px-4 py-12 tablet:py-16 containerMax:py-24">
          <ProductSection productId={params.slug} />

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Page;
