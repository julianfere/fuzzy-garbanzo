import { useMemo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { QueryClient, QueryClientProvider } from "react-query";
import home from "../../assets/home.svg";
import menu from "../../assets/menu.svg";
import "./layout.css";

export const Layout = () => {
  const { getCurrentUser } = useAuth();
  const currentUser = useMemo(() => getCurrentUser(), [getCurrentUser]);
  const queryClient = new QueryClient();

  return (
    <>
      <nav className="nav">
        <section className="first">
          <img src={menu} alt="menu" />
        </section>
        <section className="second">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${isActive ? "active-link" : ""} nav-link`
            }
          >
            <img src={home} alt="home" />
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `${isActive ? "active-link" : ""} nav-link`
            }
          >
            Estudiantes
          </NavLink>
        </section>
        <section className="third">
          <p className="username">{currentUser?.name}</p>
        </section>
      </nav>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
};
