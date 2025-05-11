const sizeClasses: Record<string, string> = {
  sm: "h-5 py px-[5px] text-xs",
  md: "h-6 py px-[7px] text-sm",
  lg: "h-7 py-[3px] px-[9px] text-sm",
};

const variantClasses: Record<string, string> = {
  neutral: "bg-gray-50 border-neutral-200 text-neutral-600",
  danger: "bg-red-50 border-red-200 text-red-600",
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  success: "bg-green-50 border-green-200 text-green-700",
  brand: "bg-indigo-50 border-indigo-200 text-indigo-700",
};

const Badge = ({ label, size = "md", variant = "neutral", className }: any) => {
  const commonClasses = "rounded-full text-center border";
  return (
    <div
      className={
        commonClasses +
        " " +
        sizeClasses[size] +
        " " +
        variantClasses[variant] +
        " " +
        className
      }
    >
      {label}
    </div>
  );
};

export default Badge;
