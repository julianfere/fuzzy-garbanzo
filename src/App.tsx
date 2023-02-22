import { AuthProvider } from "./auth/AuthProvider";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { protect } from "./auth/protect";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/layout/Layout";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: protect(<Layout />),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  );
}

export default App;
