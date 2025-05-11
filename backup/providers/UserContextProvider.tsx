"use client";
import { PropsWithChildren, useState } from "react";
import { UserType, UserContext } from "../contexts/UserContext";

const UserContextProvider = ({ children }: PropsWithChildren) => {
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

export default UserContextProvider;
