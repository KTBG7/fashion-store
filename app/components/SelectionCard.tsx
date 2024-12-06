import { RiCheckboxCircleFill } from "react-icons/ri";

type SelectionCardProps = {
  selected: boolean;
  title: string;
  description: string;
  price: string;
  onClick: () => void;
};

const SelectionCard = ({
  selected = false,
  title,
  description,
  price,
  onClick,
}: SelectionCardProps) => {
  return (
    <button
      className={`flex flex-col gap-5 w-full p-4 border rounded-lg ${selected ? "border-2 border-indigo-600" : "border-neutral-200"}`}
      onClick={() => onClick()}
      type="button"
    >
      <div className="flex gap-2 w-full">
        <div className="flex flex-col text-left flex-grow">
          <span className="text-base font-medium text-neutral-900">
            {title}
          </span>
          <span className="text-sm text-neutral-600">{description}</span>
        </div>
        {selected && (
          <RiCheckboxCircleFill className="fill-indigo-500 w-6 h-6" />
        )}
      </div>
      <span className="text-base font-medium text-neutral-900">{price}</span>
    </button>
  );
};

export default SelectionCard;
