// context/AuthContext.tsx
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { User } from '../models/UserModel';
import { useLocalStorage } from './LocalStorageProvider';
import { useNavigate } from 'react-router';
interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const navigate = useNavigate();

  const login = (data: User, token: string) => {
    setUser(data);
    localStorage.setItem('token', token);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: user !== null,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an <AuthProvider>');
  }
  return ctx;
}
