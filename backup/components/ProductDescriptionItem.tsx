import { useEffect, useRef } from "react";
import { ProductInfo } from "../types";

type ProductDescriptionItemProps = {
  info: ProductInfo;
  idx: number;
};

const ProductDescriptionItem = ({ info, idx }: ProductDescriptionItemProps) => {
  const descriptionRef = useRef<HTMLUListElement>(null);
  const toggleDescription = () => {
    if (descriptionRef.current) {
      if (descriptionRef.current.style.maxHeight !== "0px") {
        descriptionRef.current.style.maxHeight = "0px";

        descriptionRef.current.style.marginTop = "0px";
      } else {
        descriptionRef.current.style.maxHeight =
          descriptionRef.current.scrollHeight + "px";

        descriptionRef.current.style.marginTop = "8px";
      }
    }
  };

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.maxHeight =
        descriptionRef.current.scrollHeight + "px";
      descriptionRef.current.style.marginTop = "8px";
    }
  }, []);
  return (
    <li
      className={
        idx !== 0 ? "pt-6 border border-transparent border-t-gray-200" : ""
      }
    >
      <div className="flex justify-between items-center ">
        <h5 className="text-lg font-medium">{info.title}</h5>
        <button
          className="rounded-full w-5 flex items-center justify-center h-5 border-2 border-neutral-400 "
          onClick={toggleDescription}
        >
          <div className="w-2.5 h-0.5 bg-neutral-400"></div>
        </button>
      </div>
      <ul
        style={{ transition: "max-height 0.3s ease-out" }}
        className={`list-disc list-inside pl-2 overflow-hidden `}
        ref={descriptionRef}
      >
        {info.description.map((desc, idx) => {
          return (
            <li key={idx} className="text-base text-neutral-600">
              {desc}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default ProductDescriptionItem;
