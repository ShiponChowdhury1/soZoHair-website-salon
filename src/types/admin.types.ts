export interface BaseEntity {
  id: string;
  status: "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export interface Article extends BaseEntity {
  title: string;
  description: string; // Rich HTML content
}

export interface Service extends BaseEntity {
  name: string;
  price: string;
  description: string; // Rich HTML content
}

export interface Product extends BaseEntity {
  name: string;
  price: string;
  category: string;
  description: string; // Rich HTML content
}

export type EntityType = "article" | "service" | "product";
