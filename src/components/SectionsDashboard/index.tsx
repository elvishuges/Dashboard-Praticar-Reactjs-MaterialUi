import React from 'react';
import { Paper, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { SectionDashbaordContainer } from './style';

type SectionDashbaordProps = {
  items: SectionProps[];
  onItemClick?: (item: Subject) => void;
};
type SectionProps = {
  bgColor: string;
  description: string;
  subjects: Subject[];
};
type Subject = {
  description: string;
};
const SectionDashbaord: React.FC<SectionDashbaordProps> = ({
  items,
  onItemClick,
}) => {
  const onChipClick = (item: Subject) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };
  return (
    <SectionDashbaordContainer>
      {items.map((day, indexDay) => (
        <Paper key={indexDay} style={{ width: '14%', margin: '0px' }}>
          <Typography
            align='center'
            style={{ padding: '16px', background: day.bgColor, color: '#fff' }}
          >
            {day.description}
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
    </SectionDashbaordContainer>
  );
};

export default SectionDashbaord;
