import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  Fab,
} from '@mui/material';
import { Container } from './style';

type DaysOfWeekHeader = {
  label: string;
  color: string;
};
type DayOfWeekItem = {
  description: string;
  dayOfWeek: string;
  color: string;
};
// Componente que renderiza a tabela de dias da semana com cards
const WeekDaysTable: React.FC = () => {
  const daysOfWeekHeader: DaysOfWeekHeader[] = [
    { label: 'Domingo', color: 'red' },
    { label: 'Segunda', color: 'blue' },
    { label: 'Terça', color: 'green' },
    { label: 'Quarta', color: 'orange' },
    { label: 'Quinta', color: 'purple' },
    { label: 'Sexta', color: 'cyan' },
    { label: 'Sábado', color: 'magenta' },
  ];

  // Função para exibir o conteúdo do card com base no dia da semana
  const renderCardContent = (day: DaysOfWeekHeader) => (
    <CardContent style={{ paddingInline: 10, paddingTop: 5 }}>
      <p>Atividades para {day.color}:</p>
      {/* Adicione aqui o conteúdo do card para o dia específico */}
    </CardContent>
  );

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {daysOfWeekHeader.map((day, index) => (
                <TableCell
                  key={index}
                  align='center'
                  style={{ width: '14%', background: day.color }}
                >
                  {day.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableRow>
            {daysOfWeekHeader.map((day, index) => (
              <TableCell
                key={index}
                style={{
                  width: '14%',
                  verticalAlign: 'top',
                }}
              >
                <Paper elevation={10}>{renderCardContent(day)}</Paper>
              </TableCell>
            ))}
          </TableRow>
        </Table>
      </TableContainer>
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2),
        }}
        color='primary'
        aria-label='add'
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default WeekDaysTable;
