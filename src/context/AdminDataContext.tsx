"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import type { Article, Service, Product } from "@/types/admin.types";

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function now(): string {
  return new Date().toISOString();
}

function loadFromStorage<T>(key: string, fallback: T[]): T[] {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, data: T[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
}

/* ------------------------------------------------------------------ */
/*  Seed data so the dashboard isn't empty on first load              */
/* ------------------------------------------------------------------ */

const SEED_ARTICLES: Article[] = [
  {
    id: "seed-a1",
    title: "2024 Hair Trends Part One",
    description:
      "<p>Discover the top hair trends for 2024 — from bold colors to textured cuts that make a statement.</p>",
    status: "active",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "seed-a2",
    title: "How to Care for Color-Treated Hair",
    description:
      "<p>Keep your salon color vibrant with these professional tips on washing, conditioning, and heat protection.</p>",
    status: "active",
    createdAt: "2024-02-20T10:00:00Z",
    updatedAt: "2024-02-20T10:00:00Z",
  },
  {
    id: "seed-a3",
    title: "The Ultimate Guide to Wigs",
    description:
      "<p>Everything you need to know about choosing, styling, and maintaining wigs for any occasion.</p>",
    status: "inactive",
    createdAt: "2024-03-10T10:00:00Z",
    updatedAt: "2024-03-10T10:00:00Z",
  },
];

const SEED_SERVICES: Service[] = [
  {
    id: "seed-s1",
    name: "Women's Haircut & Style",
    price: "65",
    description:
      "<p>Includes consultation, shampoo, precision cut, and professional blow-dry styling.</p>",
    status: "active",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
  },
  {
    id: "seed-s2",
    name: "Full Balayage Color",
    price: "185",
    description:
      "<p>Hand-painted highlights for a natural, sun-kissed look that grows out beautifully.</p>",
    status: "active",
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z",
  },
  {
    id: "seed-s3",
    name: "Spa Facial Treatment",
    price: "95",
    description:
      "<p>Deep-cleansing facial with exfoliation, mask, and relaxing massage — perfect for glowing skin.</p>",
    status: "active",
    createdAt: "2024-01-14T10:00:00Z",
    updatedAt: "2024-01-14T10:00:00Z",
  },
];

const SEED_PRODUCTS: Product[] = [
  {
    id: "seed-p1",
    name: "Moroccan Oil Treatment",
    price: "34",
    category: "Hair Care",
    description:
      "<p>Lightweight, argan oil-infused formula that softens, detangles, and adds brilliant shine.</p>",
    status: "active",
    createdAt: "2024-01-20T10:00:00Z",
    updatedAt: "2024-01-20T10:00:00Z",
  },
  {
    id: "seed-p2",
    name: "Olaplex No. 3 Hair Perfector",
    price: "28",
    category: "Hair Repair",
    description:
      "<p>At-home bond-building treatment that strengthens and repairs damaged hair.</p>",
    status: "active",
    createdAt: "2024-01-22T10:00:00Z",
    updatedAt: "2024-01-22T10:00:00Z",
  },
  {
    id: "seed-p3",
    name: "Dyson Supersonic Hair Dryer",
    price: "429",
    category: "Tools",
    description:
      "<p>Engineered for fast drying with no extreme heat damage — intelligent heat control protects shine.</p>",
    status: "inactive",
    createdAt: "2024-01-25T10:00:00Z",
    updatedAt: "2024-01-25T10:00:00Z",
  },
];

/* ------------------------------------------------------------------ */
/*  Context type                                                      */
/* ------------------------------------------------------------------ */

interface AdminDataContextType {
  /* Articles */
  articles: Article[];
  addArticle: (data: Omit<Article, "id" | "createdAt" | "updatedAt" | "status">) => void;
  updateArticle: (id: string, data: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  toggleArticleStatus: (id: string) => void;

  /* Services */
  services: Service[];
  addService: (data: Omit<Service, "id" | "createdAt" | "updatedAt" | "status">) => void;
  updateService: (id: string, data: Partial<Service>) => void;
  deleteService: (id: string) => void;
  toggleServiceStatus: (id: string) => void;

  /* Products */
  products: Product[];
  addProduct: (data: Omit<Product, "id" | "createdAt" | "updatedAt" | "status">) => void;
  updateProduct: (id: string, data: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  toggleProductStatus: (id: string) => void;
}

const AdminDataContext = createContext<AdminDataContextType | null>(null);

/* ------------------------------------------------------------------ */
/*  Provider                                                          */
/* ------------------------------------------------------------------ */

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* Load from localStorage on mount */
  useEffect(() => {
    setArticles(loadFromStorage<Article>("sozo_admin_articles", SEED_ARTICLES));
    setServices(loadFromStorage<Service>("sozo_admin_services", SEED_SERVICES));
    setProducts(loadFromStorage<Product>("sozo_admin_products", SEED_PRODUCTS));
    setHydrated(true);
  }, []);

  /* Persist whenever data changes (skip initial empty render) */
  useEffect(() => {
    if (!hydrated) return;
    saveToStorage("sozo_admin_articles", articles);
  }, [articles, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveToStorage("sozo_admin_services", services);
  }, [services, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveToStorage("sozo_admin_products", products);
  }, [products, hydrated]);

  /* ---- Articles CRUD ---- */

  const addArticle = useCallback(
    (data: Omit<Article, "id" | "createdAt" | "updatedAt" | "status">) => {
      const article: Article = {
        ...data,
        id: generateId(),
        status: "active",
        createdAt: now(),
        updatedAt: now(),
      };
      setArticles((prev) => [article, ...prev]);
    },
    []
  );

  const updateArticle = useCallback((id: string, data: Partial<Article>) => {
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...data, updatedAt: now() } : a))
    );
  }, []);

  const deleteArticle = useCallback((id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  }, []);

  const toggleArticleStatus = useCallback((id: string) => {
    setArticles((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === "active" ? "inactive" : "active", updatedAt: now() }
          : a
      )
    );
  }, []);

  /* ---- Services CRUD ---- */

  const addService = useCallback(
    (data: Omit<Service, "id" | "createdAt" | "updatedAt" | "status">) => {
      const service: Service = {
        ...data,
        id: generateId(),
        status: "active",
        createdAt: now(),
        updatedAt: now(),
      };
      setServices((prev) => [service, ...prev]);
    },
    []
  );

  const updateService = useCallback((id: string, data: Partial<Service>) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data, updatedAt: now() } : s))
    );
  }, []);

  const deleteService = useCallback((id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const toggleServiceStatus = useCallback((id: string) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "active" ? "inactive" : "active", updatedAt: now() }
          : s
      )
    );
  }, []);

  /* ---- Products CRUD ---- */

  const addProduct = useCallback(
    (data: Omit<Product, "id" | "createdAt" | "updatedAt" | "status">) => {
      const product: Product = {
        ...data,
        id: generateId(),
        status: "active",
        createdAt: now(),
        updatedAt: now(),
      };
      setProducts((prev) => [product, ...prev]);
    },
    []
  );

  const updateProduct = useCallback((id: string, data: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data, updatedAt: now() } : p))
    );
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const toggleProductStatus = useCallback((id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "active" ? "inactive" : "active", updatedAt: now() }
          : p
      )
    );
  }, []);

  return (
    <AdminDataContext.Provider
      value={{
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
        toggleArticleStatus,
        services,
        addService,
        updateService,
        deleteService,
        toggleServiceStatus,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProductStatus,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const ctx = useContext(AdminDataContext);
  if (!ctx) throw new Error("useAdminData must be used inside AdminDataProvider");
  return ctx;
}
