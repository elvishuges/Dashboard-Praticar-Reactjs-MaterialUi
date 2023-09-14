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
import { throws } from 'assert';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select
type FormType = {
  label: string;
  weekDay: string;
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
    subjects: [],
  },
  {
    label: 'Terça',
    bgColor: '#D1382E',
    subjects: [],
  },
  {
    label: 'Quarta',
    bgColor: '#13599E',
    subjects: [],
  },
  {
    label: 'Quinta',
    bgColor: '#1510DE',
    subjects: [],
  },
  {
    label: 'Sexta',
    bgColor: '#BCD104',
    subjects: [],
  },
  {
    label: 'Sábado',
    bgColor: '#0A2E52',
    subjects: [],
  },
  {
    label: 'Domingo',
    bgColor: 'red',
    subjects: [],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [openDialog, setOpendialog] = useState(false);

  const onCreateSubject = (form: FormType) => {
    addSubjectInWeekDay(form);
    setOpendialog(false);
  };
  const addSubjectInWeekDay = (form: FormType) => {
    let added = false;
    try {
      for (let index = 0; index < daysOfWeek.length; index++) {
        if (daysOfWeek[index].label == form.weekDay) {
          const subject: Subject = { description: form.label };
          daysOfWeek[index].subjects.push(subject);
          added = true;
        }
      }
      if (!added) {
        throw Error('Dia Da Senana Não Encontrado');
      }
    } catch (error) {
      alert(error);
    }
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
        onCreate={(form: FormType) => onCreateSubject(form)}
        setOpen={(value) => setOpendialog(value)}
      />
    </Container>
  );
}
