import Image from "next/image";
import React from "react";
import { Product } from "../types";
import starIcon from "@/public/Star.svg";
import emptyStar from "@/public/EmptyStar.svg";
import halfStar from "@/public/HalfStar.svg";

type RatingIconProps = {
  product: Product;
};

const RatingIcon = ({ product }: RatingIconProps) => {
  const halfStars = product.rating % Math.floor(product.rating);
  const emptyStars = 5 - (Math.floor(product.rating) + (halfStars ? 1 : 0));
  return (
    <>
      {" "}
      {Array.from(Array(Math.floor(product.rating))).map((img, idx: number) => (
        <Image
          src={starIcon}
          key={idx}
          alt="Full Review Star"
          height={20}
          width={20}
        />
      ))}
      {halfStars ? (
        <Image src={halfStar} alt="Half Review Star" height={20} width={20} />
      ) : null}
      {emptyStars
        ? Array.from(Array(emptyStars)).map((img, idx: number) => (
            <Image
              src={emptyStar}
              height={20}
              width={20}
              alt="Empty Review Star"
              key={idx}
            />
          ))
        : null}
    </>
  );
};

export default RatingIcon;
