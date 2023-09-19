import React from 'react';
import { Paper, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { WeekDashboardContainer } from './style';

type WeekDashboardProps = {
  items: DaysOfWeekProps[];
  onItemClick?: (item: Subject) => void;
};
type DaysOfWeekProps = {
  bgColor: string;
  label: string;
  subjects: Subject[];
};
type Subject = {
  description: string;
};
const WeekDashboard: React.FC<WeekDashboardProps> = ({
  items,
  onItemClick,
}) => {
  const onChipClick = (item: Subject) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  return (
    <WeekDashboardContainer>
      {items.map((day, indexDay) => (
        <Paper key={indexDay} style={{ width: '14%', margin: '0px' }}>
          <Typography
            align='center'
            style={{ padding: '16px', background: day.bgColor, color: '#fff' }}
          >
            {day.label}
          </Typography>
          {day.subjects.map((subject, indexSubject) => (
            <div
              key={indexSubject}
              onClick={() => onChipClick(subject)}
              style={{
                width: 'auto',
                marginTop: 10,
                marginInline: 10,
                cursor: 'pointer',
              }}
            >
              <Chip
                sx={{
                  'height': 'auto',
                  '& .MuiChip-label': {
                    whiteSpace: 'normal',
                    margin: 1,
                  },
                }}
                label={subject.description}
              />
            </div>
          ))}
        </Paper>
      ))}
    </WeekDashboardContainer>
  );
};

export default WeekDashboard;
