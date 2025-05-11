"use client";
import Navbar from "@/app/components/Navbar";
import React, { use } from "react";
import ProductSection from "@/app/components/ProductSection";
import Footer from "@/app/components/Footer";

type Params = Promise<{ slug: string }>;

const Page = ({ params }: { params: Params }) => {
  const { slug } = use(params);
  return (
    <>
      <Navbar />
      <div className="w-full px-4 bg-transparent">
        <main className="flex flex-col items-center gap-12 tablet:gap-16 containerMax:gap-24 w-full bg-white rounded-lg max-containerMax:px-4 py-12 tablet:py-16 containerMax:py-24">
          <ProductSection productId={slug} />

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Page;
