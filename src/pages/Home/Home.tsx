import { useMemo } from "react";
import { useAuth } from "../../auth/useAuth";

export const Home = () => {
  const { getCurrentUser } = useAuth();
  const currentUser = useMemo(() => getCurrentUser(), [getCurrentUser]);
  return <main></main>;
};
