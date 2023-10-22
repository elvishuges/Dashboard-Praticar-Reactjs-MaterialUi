import React from 'react';
import { Paper, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { SectionDashbaordContainer } from './style';
import { SectionDTO } from '../../types/dto/SectionDTO';

type SectionDashbaordProps = {
  items: SectionDTO[];
  onItemClick?: (item: Subject) => void;
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
      {items.map((section, sectionIndex) => (
        <Paper key={sectionIndex} style={{ width: '14%', margin: '0px' }}>
          <Typography
            align='center'
            style={{
              padding: '16px',
              color: '#8f7c7c',
            }}
          >
            {section.description}
          </Typography>
          {section.subjects.map((subject, indexSubject) => (
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
