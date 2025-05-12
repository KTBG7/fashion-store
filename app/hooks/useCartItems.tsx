import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const useCartItems = () => {
  const { user } = useContext(UserContext);
  return [...user.cart.values()];
}

export default useCartItems;
