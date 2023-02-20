type User = {
  name: string;
  email: string;
  birthDate: string;
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

export type { AuthContextType, User, LoginData };
