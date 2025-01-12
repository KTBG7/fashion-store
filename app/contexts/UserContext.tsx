"use client";
import { createContext } from "react";
import { SelectedProduct } from "../types";

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
