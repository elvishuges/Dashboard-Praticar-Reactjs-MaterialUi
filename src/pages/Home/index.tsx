import { useEffect, useState } from 'react';

import BaseButton from '../../components/BaseButton';

import { Container } from './style';
import RoomCard from '../../components/RoomCard';
import { Col, Row } from 'react-grid-system';
import { useNavigate } from 'react-router-dom';
import * as user from './../../services/user';
import BaseInput from '../../components/BaseInput';
import BaseSelect from '../../components/BaseSelect';
import { RoomData } from '../../types/RoomDTO';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

type Option = {
  value: string;
  label: string;
};
export default function Home() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<RoomData[]>([]);
  const [selectOption, setSelectOption] = useState<Option[]>([]);

  const handleCreateRoom = () => {
    navigate('/create-room');
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const roomsData: RoomData[] = await user.getAllRoom();
      setRooms(roomsData);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      alert(`'Error fetching rooms:', ${error}`);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <BaseInput placeholder='Buscar'></BaseInput>
        </Col>
      </Row>
      <Row>
        {rooms.map((room) => (
          <Col sm={4} md={4} key={room.idRoom}>
            <RoomCard room={room} />
          </Col>
        ))}
      </Row>
      <div className='footer-button'>
        <BaseButton
          background='#222222'
          type='button'
          onButtonClick={handleCreateRoom}
          text='Criar Encontro'
        ></BaseButton>
      </div>
    </Container>
  );
}
