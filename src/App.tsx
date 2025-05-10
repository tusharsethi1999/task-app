import { Route, Routes } from 'react-router';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { TaskComponent } from './components/TaskComponent';
import { AuthPage } from './pages/AuthPage';
import { AuthProvider } from './providers/AuthProvider';
import { ProtectedRoute } from './providers/ProtectedRoute';

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <>
                <HeaderComponent />
                <TaskComponent />
              </>
            }
          />
        </Route>
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </AuthProvider>
  );
};
