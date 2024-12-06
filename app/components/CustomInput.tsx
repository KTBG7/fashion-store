import React, {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  InvalidEvent,
  SetStateAction,
} from "react";

type CustomInputProps = {
  type: HTMLInputTypeAttribute;
  value: string;
  placeholder: string;
  updateState: Dispatch<SetStateAction<string>>;
  onInvalid?: (e: InvalidEvent<HTMLInputElement>) => void;
  maxLength?: number;
  onChange?: (
    e: ChangeEvent<HTMLInputElement>,
    updateState: Dispatch<SetStateAction<any>>,
    maxLength: number,
  ) => void;
  label?: string;
};

const CustomInput = ({
  type,
  value,
  placeholder,
  updateState,
  onInvalid,
  onChange,
  maxLength,
  label,
}: CustomInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!onChange && !!updateState && !!maxLength) {
      onChange(e, updateState, maxLength);
    } else {
      updateState(e.target.value);
    }
  };
  return (
    <div className="flex flex-grow flex-col gap-1.5">
      {label ? <label className="text-sm font-medium">{label}</label> : null}
      <input
        className={`border w-full border-solid border-neutral-200 bg-neutral-50 ring-none outline-none rounded px-[14px] py-[10px] text-sm h-10 focus:ring  focus:ring-opacity-20 focus:ring-indigo-500 focus:border-indigo-500 invalid:focus:ring-red-600 invalid:focus:border-red-600`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        onInvalid={onInvalid}
      />
    </div>
  );
};

export default CustomInput;
