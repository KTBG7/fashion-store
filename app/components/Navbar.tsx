import { useContext, useEffect, useRef, useState } from "react";
import shoppingBag from "@/public/shopping-bag.svg";
import logo from "@/public/stylenest.svg";
import hamburgerIcon from "@/public/hamburger-icon.svg";
import Image from "next/image";
import Sidebar from "./Sidebar";
import CustomButton from "./atoms/CustomButton";
import { UserContext } from "../contexts/UserContext";

type NavbarProps = {
  disabledCart?: boolean;
};

const Navbar = ({ disabledCart = false }: NavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const logoRef = useRef<HTMLButtonElement>(null);
  const hamburgerMenuRef = useRef<HTMLButtonElement>(null);
  const { user } = useContext(UserContext);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    if (
      !showSidebar &&
      hamburgerMenuRef.current &&
      document.activeElement?.id === "close-menu-button"
    ) {
      hamburgerMenuRef.current.focus();
    }
  }, [logoRef, hamburgerMenuRef, showSidebar]);

  return (
    <header className="flex items-center justify-center bg-transparent py-3">
      <nav className="container col-span-4 tablet:col-span-6 containerMax:col-span-12 h-fit items-center bg-transparent">
        <Sidebar
          showSidebar={showSidebar}
          closeSidebar={closeSidebar}
          logoRef={logoRef}
        />
        <div className="col-span-2 tablet:col-span-3 containerMax:col-span-2">
          <CustomButton
            label="Home"
            localLink="/"
            role="link"
            variant="Tertiary"
            className="flex w-fit items-center"
          >
            <Image width={105} height={32} src={logo} alt="Stylenest logo" />
          </CustomButton>
        </div>
        <div className="hidden containerMax:col-span-9 containerMax:flex items-center gap-8">
          <CustomButton
            variant="Tertiary"
            label="Shop all"
            localLink="/shop/products/all"
            role="link"
          >
            Shop All
          </CustomButton>
          <CustomButton
            label="Latest arrivals"
            localLink="/shop/latest"
            role="link"
            variant="Tertiary"
          >
            Latest arrivals
          </CustomButton>
        </div>
        <div className="col-span-2 tablet:col-span-3 containerMax:col-span-1 flex justify-end h-full items-center gap-4">
          <div className="flex relative" aria-disabled={disabledCart}>
            <div
              aria-disabled={disabledCart}
              className="absolute bottom-[16px] left-[12px] flex flex-col items-center justify-center w-[18px] bg-indigo-700 px-1 py-px text-xs font-semibold text-white rounded-full aria-disabled:bg-neutral-100 aria-disabled:text-neutral-400"
            >
              <span>{user.cart.size}</span>
            </div>
            <CustomButton
              disabled={disabledCart}
              label="Shopping bag"
              role="link"
              localLink="/cart"
              variant="Tertiary"
              needsSpan={false}
              className="w-6 h-6 relative "
            >
              <Image
                aria-disabled={disabledCart}
                fill
                className="aria-disabled:opacity-50"
                src={shoppingBag}
                alt="Shopping Bag"
              />
            </CustomButton>
          </div>
          <CustomButton
            variant="Tertiary"
            className="py-0.5 containerMax:hidden"
            label="Navigation bar menu"
            flowto="logo-hamburger-menu"
            onClick={openSidebar}
            buttonRef={hamburgerMenuRef}
          >
            <Image src={hamburgerIcon} alt="Hamburger Icon" />
          </CustomButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
