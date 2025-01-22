import { useState, ReactNode, useEffect } from "react";
import { AuthContext } from "../../_context/auth/auth-context";
import { jwtDecode } from "jwt-decode";
import { Payload } from "@/types/payload";
import { useUser } from "@/app/_hooks/auth/use-user";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!token);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const { data: user, isLoading } = useUser();

  useEffect(() => {
    if (token && user) {
      const decodedToken = jwtDecode<Payload>(token);

      setEmail(decodedToken.email);

      setRole(user.role.name);
    }
  }, [token, user, isLoading]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        email,
        setEmail,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
