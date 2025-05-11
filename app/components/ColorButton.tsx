import React, { useEffect, useState } from "react";
import CustomButton from "./atoms/CustomButton";
import { COLORS } from "../constants";

type ColorButtonProps = {
  idx: number;
  color: string;
  productName?: string;
  handleColorChange?: (color: string) => void;
  onClick?: (filterOption: string, value: string, deleteFlag?: boolean) => void;
  stock?: boolean;
  selected?: boolean;
  disabled?: boolean;
  variant?: string;
};

const ColorButton = ({
  idx,
  color,
  stock = true,
  productName,
  handleColorChange = () => {},
  selected,
  disabled = false,
  variant = "small",
  onClick,
}: ColorButtonProps) => {
  const togglePrivateSelected = () => {
    if (!onClick && handleColorChange) {
      handleColorChange(color);
    }
    if (onClick) {
      onClick("color", color);
    }
  };

  return (
    <CustomButton
      key={idx}
      disabled={disabled}
      onClick={togglePrivateSelected}
      label={
        productName
          ? COLORS[color].label + " " + productName
          : COLORS[color].label
      }
      variant="Round"
      needsSpan={false}
      className={`flex items-center justify-center rounded-full group border group-focus:border-indigo-500 ${selected && !disabled ? "ring-1 ring-indigo-500 ring-offset-2" : "border-transparent"} ${variant === "small" ? "w-5 h-5" : selected ? "w-[34px] h-[34px]" : "w-[38px] h-[38px]"}`}
    >
      <span
        style={{ backgroundColor: COLORS[color].value }}
        className={` text-center flex items-center relative px-0.5 justify-center w-full h-full rounded-full ${color === "white" ? "border border-neutral-200" : ""}`}
      >
        {disabled ? null : selected && stock ? (
          <svg
            className={`w-full h-auto ${color == "white" ? "fill-black " : "fill-white"}`}
            viewBox="0 0 10 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.00035 5.58545L8.59655 0.989258L9.30365 1.69636L4.00035 6.99965L0.818359 3.8177L1.52546 3.1106L4.00035 5.58545Z" />
          </svg>
        ) : (
          (!stock ?? (
            <div
              className={`${variant === "small" ? "w-6" : "w-11"} h-px absolute -rotate-45 bg-neutral-600`}
            ></div>
          ))
        )}
      </span>
    </CustomButton>
  );
};

export default ColorButton;
