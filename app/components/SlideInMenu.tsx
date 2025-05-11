import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { CustomRecord } from "../constants";
import Checkbox from "./Checkbox";
import ColorButton from "./ColorButton";
import StarIcon from "./StarIcon";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FiltersContext } from "../contexts/FiltersContext";
import StarButton from "./StarButton";

type SlideInMenuProps = {
  items: CustomRecord;
  idx: number;
  menuDetails: { value: string; label: string };
  colors: boolean;
  stars: boolean;
  type: string;
};

const SlideInMenu = ({
  items,
  idx,
  menuDetails,
  colors,
  stars,
  type,
}: SlideInMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuDetailsRef = useRef<HTMLUListElement>(null);
  const { filters, updateFilters } = useContext(FiltersContext);

  const info = Object.values(items);
  const updateStyles = () => {
    if (menuDetailsRef.current) {
      menuDetailsRef.current.style.maxHeight =
        menuDetailsRef.current.scrollHeight + 28 + "px";
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !!!prev);
  };
  useLayoutEffect(() => {
    if (menuDetailsRef.current) {
      menuDetailsRef.current.style.maxHeight = "0px";
    }
  }, []);
  useEffect(() => {
    if (menuDetailsRef.current) {
      if (menuDetailsRef.current.style.maxHeight !== "0px" && !isOpen) {
        menuDetailsRef.current.style.maxHeight = "0px";
      } else {
        if (isOpen) {
          updateStyles();
        }
      }
    }
  }, [isOpen]);

  return (
    <li
      key={idx}
      className={`h-fit w-full ${idx !== 0 ? "h-fit border-t border-t-gray-300" : ""}`}
    >
      <button
        className="flex w-full pt-6 pb-5 items-center justify-between h-fit"
        onClick={toggleMenu}
      >
        <h5 className="text-lg font-medium">{menuDetails.label}</h5>
        {isOpen ? (
          <FiMinus className="text-neutral-600 w-5 h-5 mr-0.5" />
        ) : (
          <FiPlus className="text-neutral-600 w-5 h-5 mr-0.5" />
        )}
      </button>
      <ul
        style={{
          transitionProperty:
            "max-height, padding-bottom, margin-top, padding-top",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-out",
          maxHeight: 0,
        }}
        className={`pl-2 overflow-hidden ${isOpen ? "pb-6 pt-1" : "pb-0 mt-1 pt-0"} flex ${!colors && !stars ? "gap-4 flex-col containerMax:gap-6" : ""} ${colors ? "flex-row gap-3 flex-wrap w-full" : ""} ${stars ? "w-full flex-col gap-6" : ""}`}
        ref={menuDetailsRef}
      >
        {info.map((desc, idx) => {
          return (
            <li key={idx} className={`text-base text-neutral-600 h-fit`}>
              {!colors && !stars && (
                <Checkbox
                  onClick={updateFilters}
                  label={desc.label}
                  value={desc.value}
                  type={type}
                />
              )}
              {colors && (
                <ColorButton
                  onClick={updateFilters}
                  selected={filters.color.has(desc.label.toLowerCase())}
                  stock
                  idx={idx}
                  color={desc.label.toLowerCase()}
                />
              )}
              {stars && (
                <StarButton
                  selected={filters.rating.has(desc.value)}
                  onClick={updateFilters}
                  coloredStars={parseInt(desc.value)}
                />
              )}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default SlideInMenu;
