import React from "react";
import StarIcon from "./StarIcon";
import CustomButton from "./atoms/CustomButton";

type StarButtonProps = {
  onClick: (filterOption: string, value: string, deleteFlag?: boolean) => void;
  selected: boolean;
  coloredStars: number;
};

const StarButton = ({ onClick, selected, coloredStars }: StarButtonProps) => {
  const handleSelection = () => {
    if (selected) {
      onClick("rating", coloredStars.toString(), true);
    } else {
      onClick("rating", coloredStars.toString());
    }
  };
  return (
    <CustomButton
      onClick={handleSelection}
      className="rounded-sm"
      label={`${coloredStars} stars button`}
      variant="Image"
    >
      <StarIcon selected={selected} coloredStars={coloredStars} />
    </CustomButton>
  );
};

export default StarButton;
