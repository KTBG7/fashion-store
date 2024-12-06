import Image from "next/image";
import empty_cart from "@/public/empty_cart.svg";
import { RiArrowRightLine, RiShoppingCart2Line } from "react-icons/ri";
import CustomButton from "./atoms/CustomButton";

const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-16 col-span-full">
      <div className="no-padding-container gap-8">
        <div className="col-span-full py-[90px] tablet:py-[104px] containerMax:py-[120px] containerMax:col-span-5 flex flex-col items-center gap-5">
          <div className="rounded-full flex items-center justify-center p-3 bg-white customShadow">
            <RiShoppingCart2Line className="fill-indigo-700 w-[21px] h-[21px]" />
          </div>
          <div className="flex flex-col w-fit items-center gap-2">
            <h4 className="text-xl font-medium text-neutral-900">
              Your cart is empty
            </h4>
            <span className="text-base text-neutral-900">
              Let's go explore some products
            </span>
          </div>
          <CustomButton
            localLink="/shop/products/all"
            label="Explore Products"
            variant="Purple"
            className="[*>span]:px-4 py-2.5 max-w-[192px] font-medium text-base"
          >
            Explore Products
            <RiArrowRightLine className="ml-1.5 w-5 h-5 inline" color="white" />
          </CustomButton>
        </div>
        <Image
          src={empty_cart}
          alt="Empty Cart Image"
          height={432}
          width={692}
          quality={100}
          className="col-span-full w-full containerMax:col-span-7"
        />
      </div>
    </div>
  );
};

export default EmptyCart;
