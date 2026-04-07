import { createContext, useContext, useState, ReactNode } from "react";
import * as api from "../services/api";

type User = {
  id: number;
  username: string;
  name: string;
  role?: { id: number; name: string };
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.login({ username: email, password });
      const token = res?.data?.token;
      if (token) {
        api.authStorage.setToken(token);
        setUser({
          id: res.data.id,
          username: res.data.username,
          name: res.data.name,
          role: res.data.role,
        });
        return true;
      }
      return false;
    } catch (err) {
      console.error("Login error", err);
      return false;
    }
  };

  const logout = async () => {
    try {
      await api.logout();
    } catch (err) {
      console.warn("Logout failed", err);
    }
    api.authStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};