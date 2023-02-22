import { createContext, ReactNode, useState } from "react";
import { AuthContextType, DecodedToken, LoginData, User } from "./types";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../utils/constants";

const authContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (data: LoginData, callback: VoidFunction) => {
    try {
      const authResponse = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const authData = await authResponse.json();
      sessionStorage.setItem("token", authData.token);
      const decodedToken: DecodedToken = jwt_decode(authData.token);

      const user = {
        email: decodedToken.user.email,
        name: decodedToken.user.name,
      };

      setUser(user);
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return (
    <authContext.Provider value={value}> {children} </authContext.Provider>
  );
};

export { authContext, AuthProvider };
