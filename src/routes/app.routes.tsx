import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { PrivateRoute } from './auth.routes';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
