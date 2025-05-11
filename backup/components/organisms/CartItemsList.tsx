import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SelectedProduct } from "../../types";
import CartItem from "../molecules/CartItem";

const CartItemsList = () => {
  const { user, updateUser } = useContext(UserContext);
  const increaseQuantity = (product: SelectedProduct) => {
    if (product.inventory && product.quantity) {
      if (product.inventory.stock - product.quantity !== 0) {
        user.cart.set(product.inventory.sku, {
          name: product.name,
          inventory: product.inventory,
          image: product.image,
          quantity: product.quantity! + 1,
          description: product.description,
        });
        updateUser({
          user: user.user,
          cart: user.cart,
        });
      }
    }
  };

  const decreaseQuantity = (product: SelectedProduct) => {
    if (product.quantity && product.quantity > 1 && product.inventory) {
      user.cart.set(product.inventory.sku, {
        name: product.name,
        inventory: product.inventory,
        image: product.image,
        quantity: product.quantity! - 1,
        description: product.description,
      });
    }
    updateUser({
      user: user.user,
      cart: user.cart,
    });
  };

  const removeProductFromCart = (sku: string) => {
    user.cart.delete(sku);
  };
  if (user.cart) {
    return (
      <section className="col-span-full max-containerMax:pb-16  containerMax:col-span-8">
        <ul className="flex flex-col gap-8">
          {Array.from(user.cart.values()).map(
            (product: SelectedProduct, idx) => {
              return (
                <CartItem
                  product={product}
                  idx={idx}
                  key={idx}
                  decreaseQuantity={decreaseQuantity}
                  increaseQuantity={increaseQuantity}
                  removeProductFromCart={removeProductFromCart}
                />
              );
            },
          )}
        </ul>
      </section>
    );
  }
};

export default CartItemsList;
