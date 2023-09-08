import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ButtonBase } from '@mui/material';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='secondary'>
        <Toolbar style={{ cursor: 'pointer' }}>
          <Typography
            onClick={handleHomeClick}
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Quadro Semanal
          </Typography>
          <Button onClick={handleLogout} color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
