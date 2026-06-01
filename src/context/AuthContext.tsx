"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthUser {
  name: string;
  email: string;
  image: string;
  cartCount: number;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const MOCK_USER: AuthUser = {
  name: "Angelina Cherry",
  email: "angelina@gmail.com",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  cartCount: 2,
};

const MOCK_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "123456",
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  // Restore from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("sozo_auth");
    if (stored === "true") {
      setIsLoggedIn(true);
      setUser(MOCK_USER);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setUser(MOCK_USER);
      localStorage.setItem("sozo_auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("sozo_auth");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
