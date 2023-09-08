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

type WeekDashboardProps = {
  items: DaysOfWeekProps[];
};
type DaysOfWeekProps = {
  bgColor: string;
  label: string;
  subjects: Subject[];
};
type Subject = {
  description: string;
};
const WeekDashboard: React.FC<WeekDashboardProps> = ({ items }) => {
  return (
    <WeekDashboardContainer>
      {items.map((day, index) => (
        <Paper key={index} style={{ width: '14%', margin: '0px' }}>
          <Typography
            align='center'
            style={{ padding: '16px', background: day.bgColor, color: '#fff' }}
          >
            {day.label}
          </Typography>
          <div></div>
        </Paper>
      ))}
    </WeekDashboardContainer>
  );
};

export default WeekDashboard;
