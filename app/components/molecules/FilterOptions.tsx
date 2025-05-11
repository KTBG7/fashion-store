import { FILTER_OPTIONS } from "@/app/constants";
import SlideInMenu from "../SlideInMenu";
import CustomButton from "../atoms/CustomButton";
import { useContext } from "react";
import { FiltersContext } from "@/app/contexts/FiltersContext";

type FilterOptionsProps = {
  drawer: boolean;
};

const FilterOptions = ({ drawer }: FilterOptionsProps) => {
  const filterOptionsArray = Object.values(FILTER_OPTIONS);
  const { filters, clearFilters } = useContext(FiltersContext);
  return (
    <ul
      className={`flex flex-col py-6 containerMax:py-4 border-t border-t-gray-300 containerMax:border-none ${!drawer ? "max-containerMax:hidden containerMax:col-span-3" : ""}`}
    >
      {filterOptionsArray.map((filterOption, idx) => {
        return (
          <SlideInMenu
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
      {!drawer && (
        <li className={"border-t border-t-gray-300 w-full"}>
          <CustomButton
            variant="Secondary"
            role="button"
            className={
              filters.category.size > 0 ||
              filters.rating.size > 0 ||
              filters.color.size > 0 ||
              filters.collection.size > 0
                ? "pt-2 w-full text-indigo-700"
                : "hidden"
            }
            label="Clear Filters"
            onClick={clearFilters}
          >
            Clear All (
            {filters.category.size +
              filters.rating.size +
              filters.collection.size +
              filters.color.size}
            )
          </CustomButton>
        </li>
      )}
    </ul>
  );
};

export default FilterOptions;
