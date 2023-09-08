import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import { PrivateRoute } from './auth.routes';
import Login from '../pages/Login';
import CreateRoom from '../pages/CreateRoom';
import { useAuth } from '../hooks/auth';

function AppRoutes() {
  const { isLogged } = useAuth();
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/create-room' element={<CreateRoom />} />
        <Route path='/edit-room/:id' element={<CreateRoom />} />
      </Route>
      <Route
        path='/login'
        element={isLogged ? <Navigate to='/' /> : <Login />}
      />
    </Routes>
  );
}

export default AppRoutes;
