import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import logo from "../../assets/login-logo.svg";
import { useCallback } from "react";
import { LoginData } from "../../auth/types";
import "./login.css";

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  login: (data: LoginData, callback: VoidFunction) => Promise<void>,
  callback: VoidFunction
) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get("email")!;
  const password = formData.get("password")!;

  const payload = { email, password } as LoginData;

  login(payload, callback);
};

export const Login = () => {
  const { login } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const callback = useCallback(() => {
    navigate(from, { replace: true });
  }, [from, navigate]);

  return (
    <main className="login-container">
      <section className="card">
        <nav className="card-header">
          <ul>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="card-body">
          <img src={logo} alt="logo" />
          <section className="form-container">
            <h1>Ingresar a mi cuenta</h1>
            <form onSubmit={(e) => handleSubmit(e, login, callback)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="input" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input"
                />
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <section className="button-container">
                <button type="submit" className="submit">
                  Login
                </button>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </section>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
};
