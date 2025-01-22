import { createContext } from "react";

export interface AuthContextType {
  isLoggedIn: boolean;
  token: string | null;
  email: string | null;
  role: string | null;
  setIsLoggedIn: (status: boolean) => void;
  setToken: (token: string | null) => void;
  setEmail: (email: string) => void;
  setRole: (role: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
