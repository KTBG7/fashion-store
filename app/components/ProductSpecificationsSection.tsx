import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  RiColorFilterLine,
  RiHandHeartLine,
  RiInfinityFill,
  RiPaintLine,
  RiPlantLine,
  RiPriceTag2Line,
  RiRainbowLine,
  RiRecycleLine,
  RiScales2Line,
  RiShapesLine,
  RiShieldStarLine,
  RiShirtLine,
  RiStackLine,
  RiTShirtLine,
  RiWaterFlashLine,
  RiWindyLine,
} from "react-icons/ri";

const TABS = [
  { label: "Sustainability", value: "sustainability" },
  { label: "Comfort", value: "comfort" },
  { label: "Durability", value: "durability" },
  { label: "Versatility", value: "versatility" },
];

const specifications = [
  {
    value: "sustainability",
    title: "Eco-Friendly Choice",
    description:
      "With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/yellow-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/yellow-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/yellow-mobile.jpg",
    },
    items: [
      {
        label: "Recycled Materials",
        icon: RiRecycleLine,
      },
      {
        label: "Low Impact Dye",
        icon: RiPaintLine,
      },
      {
        label: "Carbon Neutral",
        icon: RiPlantLine,
      },
      {
        label: "Water Conservation",
        icon: RiWaterFlashLine,
      },
    ],
  },
  {
    value: "comfort",
    title: "Uncompromised Comfort",
    description:
      "Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/black-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/black-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/black-mobile.jpg",
    },
    items: [
      {
        label: "Ergonomic Fits",
        icon: RiTShirtLine,
      },
      {
        label: "Soft-to-the-Touch Fabrics",
        icon: RiHandHeartLine,
      },
      {
        label: "Breathable Weaves",
        icon: RiWindyLine,
      },
      {
        label: "Thoughtful Design",
        icon: RiColorFilterLine,
      },
    ],
  },
  {
    value: "durability",
    title: "Built to Last",
    description:
      "Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/chair-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/chair-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/chair-mobile.jpg",
    },
    items: [
      {
        label: "Reinforced Construction",
        icon: RiStackLine,
      },
      {
        label: "Quality Control",
        icon: RiScales2Line,
      },
      {
        label: "Material Resilience",
        icon: RiShieldStarLine,
      },
      {
        label: "Warranty and Repair",
        icon: RiPriceTag2Line,
      },
    ],
  },
  {
    value: "versatility",
    title: "Versatile by Design",
    description:
      "Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch. ",
    img: {
      desktop:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/clothes-desktop.jpg",
      tablet:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/clothes-tablet.jpg",
      mobile:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/product-specifications-section/clothes-mobile.jpg",
    },
    items: [
      {
        label: "Adaptive Styles",
        icon: RiRainbowLine,
      },
      {
        label: "Functional Fashion",
        icon: RiShirtLine,
      },
      {
        label: "Timeless Aesthetics",
        icon: RiInfinityFill,
      },
      {
        label: "Mix-and-Match Potential",
        icon: RiShapesLine,
      },
    ],
  },
];

const ProductSpecificationsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const switchTab = (idx: number) => {
    setActiveIdx(idx);
  };
  return (
    <section className="flex flex-col gap-16 col-span-full pb-12 md:pb-16 containerMax:pb-24">
      <div>
        <h2 className="text-5xl pb-6 text-neutral-900 font-semibold">
          Discover timeless elegance
        </h2>
        <p className="text-lg text-neutral-600 ">
          Step into a world where quality meets quintessential charm with our
          collection. Every thread weaves a promise of unparalleled quality,
          ensuring that each garment is not just a part of your wardrobe, but a
          piece of art. Here's the essence of what makes our apparel the
          hallmark for those with an eye for excellence and a heart for the
          environment.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <ul className="flex overflow-scroll">
          {TABS.map((tab, idx) => {
            return (
              <li key={idx} className="flex">
                <button
                  className={`border-b pb-3 text-base px-2 font-medium ${activeIdx === idx ? "border-b-indigo-700 text-indigo-700 " : "border-b-neutral-300 text-neutral-600"}`}
                  onClick={() => switchTab(idx)}
                >
                  {tab.label}
                </button>
                <div className="w-6 self-end border-b border-b-neutral-300"></div>
              </li>
            );
          })}
          <li className="w-full border-b border-b-neutral-300"></li>
        </ul>
        <div className="flex gap-8 flex-col containerMax:flex-row">
          <Image
            src={specifications[activeIdx].img.desktop}
            width={367}
            height={256}
            className="rounded-lg flex-shrink-0 object-cover"
            alt={specifications[activeIdx].title}
            quality={100}
            loading="eager"
            priority
          />
          <div>
            <h3 className="text-neutral-900 font-medium text-2xl">
              {specifications[activeIdx].title}
            </h3>
            <p className="text-neutral-600 text-base">
              {specifications[activeIdx].description}
            </p>
            <ul className="pt-8 no-padding-container gap-8">
              {specifications[activeIdx].items.map((item, idx) => {
                return (
                  <li
                    className="col-span-full md:col-span-6 flex gap-3"
                    key={idx}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border bg-white customShadow">
                      <item.icon className="w-6 h-6 text-indigo-700" />
                    </div>
                    <span className="self-center text-base text-neutral-600">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecificationsSection;
