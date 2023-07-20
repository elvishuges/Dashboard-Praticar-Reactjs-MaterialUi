import { useNavigate } from 'react-router-dom';
import BaseButton from '../BaseButton';
import { Container, Text } from './style';

const RoomCard = () => {
  const handleLogout = () => {
    // Lógica para realizar o logout
  };

  return (
    <Container>
      <Text>Olá seja bem vindo ao change my mid</Text>

      <BaseButton
        padding='8px'
        type='button'
        text='Change My Mind'
        backgroundColor='#3D5A73'
        borderRadius='0px'
        onButtonClick={handleLogout}
      />
    </Container>
  );
};

export default RoomCard;
