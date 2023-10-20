import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import { PrivateRoute } from './auth.routes';
import Login from '../pages/Login';
import { useAuth } from '../hooks/auth';
import SubjectDetails from '../pages/SubjectDetails';
import Register from '../pages/Register';

function AppRoutes() {
  const { isLogged } = useAuth();
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/subject-details/' element={<SubjectDetails />} />
      </Route>
      <Route
        path='/login'
        element={isLogged ? <Navigate to='/' /> : <Login />}
      />
      <Route
        path='/register'
        element={isLogged ? <Navigate to='/' /> : <Register />}
      />
    </Routes>
  );
}

export default AppRoutes;
