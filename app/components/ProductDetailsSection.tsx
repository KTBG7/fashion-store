import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { PRODUCT_SIZES } from "../constants";
import { Product, ProductImage, ProductInventory } from "../types";
import Link from "next/link";
import ColorButton from "./ColorButton";
import CustomButton from "./atoms/CustomButton";
import QuantityButton from "./QuantityButton";
import ProductDescriptionItem from "./ProductDescriptionItem";
import Badge from "./atoms/Badge";
import { UserContext } from "../contexts/UserContext";
import RatingIcon from "./RatingIcon";

type ProductDetailsSectionProps = {
  selectedColor: string;
  image: ProductImage;
  product: Product;
  inventory: ProductInventory;
  changeColor: (color: string) => void;
};

const ProductDetailsSection = ({
  selectedColor,
  image,
  product,
  inventory,
  changeColor,
}: ProductDetailsSectionProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | number>(
    product.sizes[0] ?? "one",
  );

  const { user, updateUser } = useContext(UserContext);

  const increaseQuantity = () => {
    if (inventory.stock - quantity !== 0) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    user.cart.set(inventory.sku, {
      name: product.name,
      inventory: inventory,
      quantity: quantity,
      image: image,
      description: product.description,
    });
    updateUser({
      user: user.user,
      cart: user.cart,
    });
  };
  useEffect(() => {
    console.log("reloaded");
  }, [selectedColor]);

  return (
    <section className="col-span-full containerMax:col-span-6 flex flex-col gap-10">
      <div>
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-5xl font-semibold pb-5 text-neutral-900">
              {product.name}
            </h2>

            {inventory.discount_percentage ? (
              <>
                <span className="text-3xl text-neutral-600 font-medium pr-2">
                  ${inventory.sale_price}
                </span>
                <span className="text-lg text-neutral-400 line-through">
                  ${inventory.list_price}
                </span>
              </>
            ) : (
              <>
                <span className="text-3xl text-neutral-600 ">
                  ${inventory.list_price}
                </span>
              </>
            )}
            {inventory.discount_percentage ? (
              <div className="mt-2 w-fit">
                <Badge
                  size="lg"
                  label={`${inventory.discount_percentage}% OFF`}
                  variant="warning"
                />
              </div>
            ) : null}
            <div className="flex items-center gap-2 pt-3">
              <span className="text-xl text-neutral-900">
                {product.rating.toFixed(2)}
              </span>
              <div className="flex gap-1">
                <RatingIcon product={product} />
              </div>
              <Link
                href={"/"}
                className="text-indigo-700 text-sm font-medium hover:underline"
              >
                See all {product.reviews} reviews
              </Link>
            </div>
          </section>
          <p className="text-neutral-600 text-base">{product.description}</p>
          <section>
            <h4 className="w-full pb-4 text-sm text-neutral-500">
              Available Colors
            </h4>
            <ul className="flex items-center py-[9px] gap-4">
              {product.colors.map((color, idx: number) => {
                return (
                  <li key={idx} className="px-[9px]">
                    <ColorButton
                      idx={idx}
                      productName={product.name}
                      key={idx}
                      color={color}
                      selected={selectedColor === color}
                      stock={inventory.stock ? true : false}
                      handleColorChange={changeColor}
                      variant="large"
                    />
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <h4 className="text-sm text-neutral-500 pb-4">Available Sizes</h4>
            <ul className="flex gap-4 flex-wrap">
              {product.sizes.length > 0 &&
                product.sizes.map((size, idx) => {
                  return (
                    <CustomButton
                      key={idx}
                      variant="Sizes"
                      selected={size === selectedSize}
                      label={"Size " + size}
                      onClick={() => setSelectedSize(size)}
                    >
                      {typeof size === "number"
                        ? size
                        : PRODUCT_SIZES[size].label}
                    </CustomButton>
                  );
                })}
              {!product.sizes.length && (
                <CustomButton
                  variant="Sizes"
                  selected={true}
                  label={"One Size"}
                  className="w-28"
                >
                  {PRODUCT_SIZES[selectedSize].label}
                </CustomButton>
              )}
            </ul>
          </section>
          <section>
            <h4 className="text-sm text-neutral-500 pb-4">Quantity</h4>
            <QuantityButton
              quantity={quantity}
              stock={inventory.stock}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            ></QuantityButton>
          </section>
          <CustomButton
            className="text-base md:text-lg font-medium py-3 tablet:py-4"
            label="Add to Cart"
            variant="Purple"
            onClick={addToCart}
          >
            {!user.cart.has(inventory.sku) ? "Add to Cart" : "Update Cart"}
          </CustomButton>
        </div>
      </div>
      <ul className="flex flex-col gap-6 pb-12 md:pb-16 containerMax:pb-24">
        {product.info.map((info, idx) => {
          return <ProductDescriptionItem idx={idx} info={info} key={idx} />;
        })}
      </ul>
    </section>
  );
};
export default ProductDetailsSection;
