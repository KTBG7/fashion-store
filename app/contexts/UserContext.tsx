"use client";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ProductInventory, SelectedProduct } from "../types";

export type UserType = {
  user: string;
  cart: Map<String, SelectedProduct>;
};
export type UserContextType = {
  user: UserType;
  updateUser: (usr: UserType) => void;
};
export const UserContext = createContext<UserContextType>({
  user: { user: "", cart: new Map() },
  updateUser: () => {},
});
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [userCtx, setUserCtx] = useState<UserType>({
    user: "",
    cart: new Map(),
  });
  const updateUser = (newUserDetails: UserType) => {
    setUserCtx({ ...newUserDetails });
  };
  return (
    <UserContext.Provider value={{ user: userCtx, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
