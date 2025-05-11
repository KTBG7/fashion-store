import React, { useEffect, useState } from "react";

type CheckboxProps = {
  label: string;
  value: string;
  onClick: (filterOption: string, value: string) => void;
  type: string;
};

const Checkbox = ({ onClick, label, value, type }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const toggleCheckbox = () => {
    setChecked((prev) => !!!prev);
  };

  useEffect(() => {
    if (loaded) {
      onClick(type, value);
    }
  }, [checked]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <button
      onClick={toggleCheckbox}
      className="flex gap-4 items-center"
      type="button"
      aria-label={label}
      role="checkbox"
      aria-checked={checked}
    >
      <input
        readOnly
        className="outline-neutral-300 border-neutral-300 accent-indigo-700"
        type="checkbox"
        aria-disabled
        checked={checked}
      />
      <label className="text-base text-neutral-600">{label}</label>
    </button>
  );
};

export default Checkbox;
