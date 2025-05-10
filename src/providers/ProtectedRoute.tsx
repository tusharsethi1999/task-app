import { Navigate, Outlet } from 'react-router';
import { useAuth } from './AuthProvider';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
