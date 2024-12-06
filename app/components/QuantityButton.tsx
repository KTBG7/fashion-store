type QuantityButtonProps = {
  stock: number;
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
};

const QuantityButton = ({
  stock,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: QuantityButtonProps) => {
  return (
    <div className="flex justify-center items-center border rounded-md border-neutral-200 w-[125px] h-9 bg-neutral-50">
      <button
        className={`text-xl w-full h-full text-center ${quantity === 1 ? "text-neutral-400" : "text-neutral-600"}`}
        aria-disabled={quantity === 1}
        tabIndex={quantity === 1 ? -1 : 0}
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="w-[49px] py-1.5 text-base font-medium text-center">
        {quantity}
      </span>
      <button
        className={`w-full h-full text-center text-xl ${quantity < stock ? "text-neutral-600" : "text-neutral-400"}`}
        aria-disabled={quantity >= stock}
        tabIndex={quantity >= stock ? -1 : 0}
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
