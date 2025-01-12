import Image from "next/image";
import React, { RefObject, useEffect } from "react";
import closeIcon from "@/public/close-icon.svg";
import logo from "@/public/ecommerce_logo.svg";
import CustomButton from "./atoms/CustomButton";
import Link from "next/link";

type SidebarProps = {
  showSidebar: boolean;
  closeSidebar: () => void;
  logoRef: RefObject<HTMLButtonElement | null>;
};

const Sidebar = ({ showSidebar, closeSidebar, logoRef }: SidebarProps) => {
  const trapFocus = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === "Tab" && !!logoRef?.current) {
      e.preventDefault();
      logoRef.current.focus();
    }
  };
  useEffect(() => {
    if (showSidebar && !!logoRef?.current) {
      logoRef.current.focus();
    }
  }, [showSidebar, logoRef]);
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 z-10 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full ${showSidebar && "translate-x-0"}`}
    >
      <div className="min-h-screen flex flex-grow flex-col gap-6 bg-white px-4 border-r-[16px] border-r-black border-opacity-50 pt-8">
        <div className="flex justify-between items-center">
          <CustomButton
            className="flex justify-center items-center px-[2px] py-[2px] rounded outline-none border-2 border-transparent border-opacity-0 focus:border-2 focus:border-indigo-500 focus:border-opacity-20 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-20"
            buttonRef={logoRef}
            disabled={showSidebar}
            variant="Tertiary"
            id="logo-hamburger-menu"
            label="Home page"
            role="link"
          >
            <Link href="/" tabIndex={-1} aria-hidden>
              <Image src={logo} width={105} height={32} alt="Stylenest logo" />
            </Link>
          </CustomButton>
          <button
            className="flex justify-center items-center px-[2px] py-[2px] rounded outline-none border-2 border-transparent border-opacity-0 focus:border-2 focus:border-indigo-500 focus:border-opacity-20 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-20"
            tabIndex={showSidebar ? 0 : -1}
            aria-label="Close menu button"
            id="close-menu-button"
            onClick={closeSidebar}
          >
            <Image src={closeIcon} width={12} height={12} alt="Close Icon" />
          </button>
        </div>
        <div className="flex flex-col gap-2 self-stretch grow">
          <CustomButton
            variant="Tertiary"
            label="Shop all"
            localLink="/shop/products/all"
            className="[&>span]:w-full py-2"
            role="link"
          >
            Shop All
          </CustomButton>
          <CustomButton
            label="Latest arrivals"
            localLink="/shop/latest"
            role="link"
            className="[&>span]:w-full py-2"
            variant="Tertiary"
          >
            Latest arrivals
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
