import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import BaseButton from '../BaseButton';
import { LogoutButton, NavbarContainer, Title } from './style';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <NavbarContainer>
      <Title>Change My Mind</Title>
      <div className='button-logout'>
        <BaseButton
          type='button'
          text='Logout'
          background='#222222'
          onButtonClick={handleLogout}
        />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
