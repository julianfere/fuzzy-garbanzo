import { createContext, ReactNode, useState } from "react";
import { AuthContextType, LoginData, User } from "./types";

const authContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (data: LoginData, callback: VoidFunction) => {
    // temporary
    const u: User = {
      name: "UserTest",
      email: "UserTest",
      birthDate: "UserTest",
    };
    setUser(u);
    callback();
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
