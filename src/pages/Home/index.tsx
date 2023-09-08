import { useEffect, useState } from 'react';

import BaseButton from '../../components/BaseButton';

import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import * as user from './../../services/user';
import { RoomData } from '../../types/RoomDTO';
import WeekDashboard from '../../components/WeekDashboard';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateSubjectDialog from '../../components/modals/CreateSubjectDialog';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

type Option = {
  value: string;
  label: string;
};

type DaysOfWeekProps = {
  bgColor: string;
  label: string;
  subjects: Subject[];
};
type Subject = {
  description: string;
};
const daysOfWeek: DaysOfWeekProps[] = [
  {
    label: 'Segunda',
    bgColor: '#034485',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Terça',
    bgColor: '#D1382E',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Quarta',
    bgColor: '#13599E',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Quinta',
    bgColor: '#1510DE',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Sexta',
    bgColor: '#BCD104',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Sabado',
    bgColor: '#0A2E52',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Domingo',
    bgColor: 'red',
    subjects: [{ description: 'Matemática' }],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [openDialog, setOpendialog] = useState(false);

  const handleCreateRoom = () => {
    navigate('/create-room');
  };

  return (
    <Container>
      <WeekDashboard items={daysOfWeek} />
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(4),
        }}
        color='primary'
        aria-label='add'
        variant='extended'
        onClick={() => setOpendialog(true)}
      >
        <AddIcon />
      </Fab>
      <CreateSubjectDialog
        open={openDialog}
        setOpen={(value) => setOpendialog(value)}
      />
    </Container>
  );
}
