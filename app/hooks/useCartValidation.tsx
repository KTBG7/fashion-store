import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/navigation";

const useCartValidation = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (user.cart.size < 1) router.push("/");
  }, [user, router]);
  return;
}

export default useCartValidation
