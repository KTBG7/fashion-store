import CustomDrawer from "../components/CustomDrawer";
import FilterOptions from "../components/molecules/FilterOptions";

type FilterProps = {
  updateFilters: (filterOption: string, value: string) => void;
  clearFilters?: () => void;
  showFilter: boolean;
  closeFilter: () => void;
};

const FilterDrawer = ({
  updateFilters,
  showFilter,
  closeFilter,
}: FilterProps) => {
  const drawerTitle = <h2 className="text-xl text-neutral-900">Filter</h2>;
  return (
    <CustomDrawer
      visible={showFilter}
      onClose={closeFilter}
      drawerTitleChild={drawerTitle}
    >
      <FilterOptions drawer={true} updateFilters={updateFilters} />
    </CustomDrawer>
  );
};

export default FilterDrawer;
