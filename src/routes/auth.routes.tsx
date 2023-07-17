import { Navigate, Outlet } from 'react-router-dom';
import Layout from './../layouts/AuthLayout';
import { useAuth } from '../hooks/auth';

export const PrivateRoute = () => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  const { isLogged } = useAuth(); // determine if authorized, from context or however you're doing it
  console.log('111', isLogged);

  return isLogged ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to='/login' />
  );
};
