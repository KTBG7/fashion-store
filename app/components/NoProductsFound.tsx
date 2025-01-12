import { RiShirtLine, RiTShirt2Line } from "react-icons/ri";
import CustomButton from "./atoms/CustomButton";
type NoProductsFoundProps = {
  hideShowNoResult: () => void;
};
const NoProductsFound = ({ hideShowNoResult }: NoProductsFoundProps) => {
  return (
    <div className="col-span-full gap-5 flex flex-grow flex-col items-center justify-center">
      <div className="flex items-center justify-center rounded-full p-3 bg-white customShadow">
        <RiTShirt2Line className="w-5 h-5 text-indigo-700" />
      </div>
      <h3 className="text-neutral-900 text-xl font-medium">
        Nothing found just yet
      </h3>
      <span className="text-neutral-600 text-base">
        Adjust your filters a bit, and let&apos;s see what we can find!
      </span>
      <CustomButton
        onClick={hideShowNoResult}
        variant="Secondary"
        label="Reset filters"
        role="button"
        className="bg-indigo-700 text-white text-base font-medium  "
        style={{ padding: "10px 20px" }}
      >
        Reset Filters
      </CustomButton>
    </div>
  );
};

export default NoProductsFound;
