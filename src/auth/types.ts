type User = {
  name: string;
  email: string;
};

type LoginData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: LoginData, callback: VoidFunction) => Promise<void>;
  logout: () => void;
};

type DecodedToken = {
  exp: number;
  user: User;
};

export type { AuthContextType, User, LoginData, DecodedToken };
