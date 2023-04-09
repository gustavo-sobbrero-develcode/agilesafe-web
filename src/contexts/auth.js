import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const signed = true;

  const logIn = (email, password) => {
    console.log(email, password);
  };

  const signUp = (email, password) => {
    console.log(email, password);
  };

  const signOut = () => {
    console.log("deslogado");
  };

  return (
    <AuthContext.Provider value={{ token, signed, logIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
