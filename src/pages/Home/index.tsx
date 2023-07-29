import { useEffect, useState } from 'react';

import BaseButton from '../../components/BaseButton';

import { Container } from './style';
import RoomCard from '../../components/RoomCard';
import { Col, Row } from 'react-grid-system';
import { useNavigate } from 'react-router-dom';
import * as user from './../../services/user';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

interface RoomData {
  idRoom: string;
  date: string;
  description: string;
  meetLink: string;
  // Add other properties as needed
}
export default function Home() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<RoomData[]>([]);

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
    }
  };

  return (
    <Container>
      <Row>
        {rooms.map((room) => (
          <Col sm={3} key={room.idRoom}>
            <RoomCard
              date={room.date}
              description={room.description}
              meetLink={room.meetLink}
            />
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
