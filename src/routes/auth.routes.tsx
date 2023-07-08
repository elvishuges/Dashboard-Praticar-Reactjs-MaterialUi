import { Navigate, Outlet } from 'react-router-dom';
import Layout from './../layouts/AuthLayout';

export const PrivateRoute = () => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return true ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to='/login' />
  );
};
