"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthUser {
  name: string;
  email: string;
  image: string;
  cartCount: number;
  role: "admin" | "user";
}

interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const MOCK_ADMIN: AuthUser = {
  name: "Admin",
  email: "admin@gmail.com",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  cartCount: 0,
  role: "admin",
};

const MOCK_USER: AuthUser = {
  name: "Angelina Cherry",
  email: "angelina@gmail.com",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  cartCount: 2,
  role: "user",
};

const MOCK_CREDENTIALS = [
  { email: "admin@gmail.com", password: "123456", user: MOCK_ADMIN },
  { email: "angelina@gmail.com", password: "123456", user: MOCK_USER },
];

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isAdmin: false,
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
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.email) {
          setIsLoggedIn(true);
          setUser(parsed);
        }
      } catch {
        // fallback for old format ("true" string)
        if (stored === "true") {
          setIsLoggedIn(true);
          setUser(MOCK_USER);
        }
      }
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const match = MOCK_CREDENTIALS.find(
      (c) => c.email === email && c.password === password
    );
    if (match) {
      setIsLoggedIn(true);
      setUser(match.user);
      localStorage.setItem("sozo_auth", JSON.stringify(match.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("sozo_auth");
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
