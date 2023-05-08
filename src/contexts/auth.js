import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const signed = true;

  const logIn = async (email, password) => {
    try {
      const response = await axios.post(
        "https://agilesafeapi.azure-api.net/login/",
        {
          loginUsuario: "sicrano@d.com",
          senha: "teste",
        },
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "466808cdbee24c0187ef54e38e1969d5",
          },
        }
      );
      return response.id;
    } catch (error) {
     // alert("Erro ao logar", error);
      return false;
    }
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
