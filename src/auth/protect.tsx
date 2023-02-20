import { RequireAuth } from "./RequireAuth";

const protect = (component: JSX.Element) => {
  return <RequireAuth>{component}</RequireAuth>;
};

export { protect };
