import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Fab,
} from '@mui/material';
import { WeekDashboardContainer } from './style';

type DaysOfWeek = {
  bgColor: string;
  label: string;
  subjects: Subject[];
};
type Subject = {
  description: string;
};
const daysOfWeek: DaysOfWeek[] = [
  {
    label: 'Segunda',
    bgColor: 'red',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Terça',
    bgColor: 'green',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Quarta',
    bgColor: 'grey',
    subjects: [{ description: 'Matemática' }],
  },
  { label: 'Quita', bgColor: 'red', subjects: [{ description: 'Matemática' }] },
  { label: 'Sexta', bgColor: 'red', subjects: [{ description: 'Matemática' }] },
  {
    label: 'Sabado',
    bgColor: 'red',
    subjects: [{ description: 'Matemática' }],
  },
  {
    label: 'Domingo',
    bgColor: 'red',
    subjects: [{ description: 'Matemática' }],
  },
];

const WeekDashboard = () => {
  return (
    <WeekDashboardContainer>
      {daysOfWeek.map((day, index) => (
        <Paper key={index} style={{ width: '14%', margin: '0px' }}>
          <Typography
            variant='h6'
            align='center'
            style={{ padding: '16px', background: day.bgColor }}
          >
            {day.label}
          </Typography>
          <div>
            <Paper
              elevation={20}
              style={{ textAlign: 'center', padding: '15px', margin: '5px' }}
            >
              C
            </Paper>
            <Paper
              elevation={20}
              style={{ textAlign: 'center', padding: '15px', margin: '5px' }}
            >
              C
            </Paper>
          </div>
        </Paper>
      ))}
    </WeekDashboardContainer>
  );
};

export default WeekDashboard;
