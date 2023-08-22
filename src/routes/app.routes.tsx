import { Route, Routes } from 'react-router-dom';
import CreateRoom from '../pages/CreateRoom';
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/create-room' element={<CreateRoom />} />
        <Route path='/edit-room/:id' element={<CreateRoom />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
