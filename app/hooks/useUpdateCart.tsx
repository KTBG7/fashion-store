import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { SelectedProduct } from "../types";

const useUpdateCart = () => {
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

  const removeProductFromCart = (sku: string) => {
    user.cart.delete(sku);
    updateUser({
      user: user.user,
      cart: user.cart,
    });
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
  return {

    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart
  }
}

export default useUpdateCart
