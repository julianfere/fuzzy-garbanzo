import { useMemo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import home from "../../assets/home.svg";
import menu from "../../assets/menu.svg";
import { useAuth } from "../../auth/useAuth";
import "./layout.css";

export const Layout = () => {
  const { getCurrentUser } = useAuth();
  const currentUser = useMemo(() => getCurrentUser(), [getCurrentUser]);

  return (
    <>
      <nav className="nav">
        <section className="first">
          <img src={menu} alt="menu" />
        </section>
        <section className="second">
          <NavLink
            to="/home"
            className={({ isActive }) => `${isActive ? "active" : ""} nav-link`}
          >
            <img src={home} alt="home" />
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) => `${isActive ? "active" : ""} nav-link`}
          >
            Estudiantes
          </NavLink>
        </section>
        <section className="third">
          <p className="username">{currentUser?.name}</p>
        </section>
      </nav>
      <Outlet />
    </>
  );
};
