import { FILTER_OPTIONS } from "@/app/constants";
import SlideInMenu from "../SlideInMenu";

type FilterOptionsProps = {
  updateFilters: (filterOption: string, value: string) => void;
  drawer: boolean;
};

const FilterOptions = ({ updateFilters, drawer }: FilterOptionsProps) => {
  const filterOptionsArray = Array.from(Object.values(FILTER_OPTIONS));
  return (
    <ul
      className={`flex flex-col py-6 containerMax:py-4 border-t border-t-gray-200 containerMax:border-none ${!drawer ? "max-containerMax:hidden containerMax:col-span-3" : ""}`}
    >
      {filterOptionsArray.map((filterOption, idx) => {
        return (
          <SlideInMenu
            updateFilters={updateFilters}
            key={idx}
            type={filterOption.value}
            items={filterOption.items}
            menuDetails={filterOption}
            colors={filterOption.value === "color"}
            stars={filterOption.value === "rating"}
            idx={idx}
          />
        );
      })}
    </ul>
  );
};

export default FilterOptions;
