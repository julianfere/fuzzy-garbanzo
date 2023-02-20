import { AuthProvider } from "./auth/AuthProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { protect } from "./auth/protect";
import { Login } from "./pages/Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: protect(<p>Home</p>),
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
