"use client";
import React, { use } from "react";
import ProductSection from "@/app/components/ProductSection";

type Params = Promise<{ slug: string }>;

const Page = ({ params }: { params: Params }) => {
  const { slug } = use(params);
  return (
    <>
      <ProductSection productId={slug} />
    </>
  );
};

export default Page;
