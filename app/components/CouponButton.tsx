import React, { Dispatch, SetStateAction } from "react";
import { RiCouponLine } from "react-icons/ri";

type CouponButtonProps = {
  subtotal: number;
  setDiscount: Dispatch<SetStateAction<number>>;
};

const CouponButton = ({ subtotal, setDiscount }: CouponButtonProps) => {
  return (
    <div className="self-end text-base font-medium flex items-center gap-1.5 text-indigo-700">
      <RiCouponLine size={20}></RiCouponLine>
      Add coupon code
    </div>
  );
};

export default CouponButton;
