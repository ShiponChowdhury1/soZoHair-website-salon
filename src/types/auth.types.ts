export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

export interface GoogleAuthPayload {
  token: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface ApiErrorResponse {
  message?: string;
}
