import React, { createContext } from "react";
import useFirebase from "./useFirebase";

export const Context = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  console.log(allContext);

  return <Context.Provider value={allContext}>{children}</Context.Provider>;
};

export default AuthProvider;
