import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import CustomButton from "./atoms/CustomButton";
import { RiLockLine } from "react-icons/ri";
import Image from "next/image";
import { COLORS, PRODUCT_SIZES } from "../constants";
import Badge from "./atoms/Badge";

const CheckoutSummary = () => {
  const { user } = useContext(UserContext);
  const discount = 5.0;
  const coupon = "GR8FRNTND24";

  let subtotal = 0;
  const calculateSubtotal = () => {
    let newSubtotal = 0;
    user.cart.forEach((product) => {
      if (product.inventory && product.quantity) {
        if (product.inventory.discount_percentage) {
          newSubtotal += product.quantity * product.inventory.sale_price;
        } else {
          newSubtotal += product.quantity * product.inventory.list_price;
        }
      }
    });
    subtotal = newSubtotal;
  };
  calculateSubtotal();

  return (
    <section className="gap-8 p-4 tablet:p-8 flex flex-col border border-neutral-200 rounded-lg col-span-full containerMax:col-span-6">
      <h3 className="font-semibold text-2xl">Order Summary</h3>
      <ul className="flex flex-col gap-8">
        {Array.from(user.cart.values()).map((product, idx) => {
          if (
            product.name &&
            product.quantity &&
            product.description &&
            product.inventory &&
            product.image
          ) {
            return (
              <li
                className={`flex h-fit max-tablet:flex-wrap gap-6 relative ${idx !== 0 ? "border-t pt-8 border-dashed border-t-neutral-300" : ""}`}
                key={idx}
              >
                <Image
                  alt={product.name}
                  src={product.image.image_url}
                  height={56}
                  width={56}
                  className="rounded-lg object-center h-14 w-14 tablet:w-20 tablet:h-20 object-cover"
                />
                <div className="flex flex-col gap-2 w-fit tablet:flex-grow flex-wrap">
                  <h4 className="text-base tablet:text-2xl font-medium text-neutral-900">
                    {product.name}
                  </h4>
                  <span className="text-base font-medium text-neutral-600">
                    {COLORS[product.inventory.color].label} •{" "}
                    {isNaN(Number(product.inventory.size))
                      ? PRODUCT_SIZES[product.inventory.size].label
                      : product.inventory.size
                        ? product.inventory.size
                        : "One Size"}
                  </span>
                  <span className="text-base font-medium text-neutral-600">
                    Quantity: {product.quantity}
                  </span>
                </div>
                <div className="flex flex-col max-tablet:w-full items-end">
                  {product.inventory.discount_percentage ? (
                    <>
                      <span className="text-lg text-neutral-900 font-medium pr-2">
                        ${product.inventory.sale_price}
                      </span>
                      <span className="text-xs text-neutral-600 self-end line-through">
                        ${product.inventory.list_price}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg text-neutral-900 font-semibold">
                        ${product.inventory.list_price}
                      </span>
                    </>
                  )}
                </div>
              </li>
            );
          }
        })}
      </ul>
      <div className="flex flex-col border-t border-t-neutral-300 py-8 flex-grow gap-4">
        <div className="flex justify-between items-center flex-wrap">
          <span className="text-neutral-600 text-base">Subtotal</span>
          <span className="text-neutral-900 font-semibold text-lg">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <span className="text-neutral-600 text-base">Shipping</span>
          <span className="text-neutral-900 font-semibold text-lg">FREE</span>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex max-tablet:flex-col gap-2 tablet:gap-8">
            <span className="text-neutral-600 text-base">Coupon Discount</span>
            <Badge variant="brand" label={coupon} />
          </div>
          <span className="text-lg font-semibold text-neutral-900">
            -${discount.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="flex border-t border-t-neutral-300 pt-8 justify-between flex-wrap">
        <span className="text-2xl font-medium text-neutral-900">Total</span>
        <span className=" text-4xl font-semibold text-neutral-900">
          ${(subtotal - discount).toFixed(2)}
        </span>
      </div>
      <CustomButton
        localLink="/order"
        variant="Purple"
        className="py-4 text-lg font-medium"
        label="Checkout button"
      >
        <RiLockLine className="inline w-5 h-5" />
        Confirm order
      </CustomButton>
    </section>
  );
};

export default CheckoutSummary;
