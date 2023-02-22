import { useContext } from "react";
import { authContext } from "./AuthProvider";

const useAuth = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { getCurrentUser, login, logout } = context;

  const isAuthenticated = !!sessionStorage.getItem("token");

  return { getCurrentUser, login, logout, isAuthenticated };
};

export { useAuth };
