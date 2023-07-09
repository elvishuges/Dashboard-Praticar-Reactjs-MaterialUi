import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { PrivateRoute } from './auth.routes';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
