import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { PrivateRoute } from './auth.routes';
import Login from '../pages/Login';
import CreateRoom from '../pages/CreateRoom';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/create-room' element={<CreateRoom />} />
        <Route path='/edit-room/:id' element={<CreateRoom />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
