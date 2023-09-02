import { useEffect, useState } from 'react';

import BaseButton from '../../components/BaseButton';

import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import * as user from './../../services/user';
import { RoomData } from '../../types/RoomDTO';
import WeekDashboard from '../../components/WeekDashboard';
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
    }
  };

  return (
    <Container>
      <WeekDashboard />
    </Container>
  );
}
