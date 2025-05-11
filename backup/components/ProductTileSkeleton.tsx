import React from "react";

type Props = {};

const ProductTileSkeleton = (props: Props) => {
  return (
    <div className="rounded-lg flex flex-col gap-3 w-full col-span-full animate-pulse-slow tablet:col-span-3">
      <div className="relative flex object-cover rounded-lg bg-gradient-to-r from-neutral-500 to-neutral-600 w-full h-[300px]"></div>

      <h4 className="text-xs w-8 h-3.5 bg-gradient-to-r from-neutral-500  text-neutral-600"></h4>
      <h3 className="text-lg text-neutral-900 h-5  bg-gradient-to-r from-neutral-500"></h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center bg-gradient-to-r from-neutral-500 w-24 ">
          <span className="text-neutral-500 h-5 text-lg  "></span>
        </div>
        <div className="pl-1 flex gap-2 flex-wrap mb-[30px] h-5 w-1/2  bg-gradient-to-r from-neutral-500"></div>
      </div>
    </div>
  );
};

export default ProductTileSkeleton;
