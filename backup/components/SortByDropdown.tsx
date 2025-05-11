import { SortByOptions, SortOptionEnum, SortOptions } from "../constants";
import CustomButton from "./atoms/CustomButton";

type SortByDropdownProps = {
  updateSortByOption: (option: SortOptions) => void;
  sortByOption: SortOptions;
  showDropdown: boolean;
};

const SortByDropdown = ({
  updateSortByOption,
  sortByOption,
  showDropdown,
}: SortByDropdownProps) => {
  return (
    <ul
      className={`absolute ${showDropdown ? "flex flex-col gap-2 right-0 top-full mt-6 p-2 w-[229px] border rounded-lg bg-white z-10 h-fit customShadow" : "hidden"}`}
    >
      {Object.entries(SortByOptions).map((option, idx) => {
        return (
          <li key={idx} className="w-full">
            <CustomButton
              onClick={() => updateSortByOption(SortOptionEnum[option[0]])}
              className={`[&>span]:p-2 text-sm w-full hover:bg-neutral-50 [&>span]:w-full text-left ${option[0] === sortByOption ? "text-indigo-700 font-medium" : "text-neutral-600"}`}
              variant="Dropdown"
              label={option[1].label}
              role="button"
            >
              {option[1].label}
            </CustomButton>
          </li>
        );
      })}
    </ul>
  );
};

export default SortByDropdown;
