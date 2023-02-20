import { useContext } from "react";
import { authContext } from "./AuthProvider";

const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { user, login, logout } = context;

  const isAuthenticated = !!user;

  return { user, login, logout, isAuthenticated };
};

export { useAuth };
