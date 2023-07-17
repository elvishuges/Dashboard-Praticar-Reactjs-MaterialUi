import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import BaseButton from '../BaseButton';
import { LogoutButton, NavbarContainer, Title } from './style';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para realizar o logout
    logout();
    navigate('/');
  };

  return (
    <NavbarContainer>
      <Title>Change My Mind</Title>
      <div className='button-logout'>
        <BaseButton type='button' text='Logout' onButtonClick={handleLogout} />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
