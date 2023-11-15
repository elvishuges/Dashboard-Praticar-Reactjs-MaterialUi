import { Chip, Paper } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'start',
  alignItems: 'center',
  alignContent: 'center',
  display: 'flex',
  flexDirection: 'row',
  color: theme.palette.text.secondary,
  height: 40,
  lineHeight: '40px',
  cursor: 'pointer',
  fontFamily: 'cursive',
}));

type CreateSubjectCard = {
  onClick: () => void;
};

const CreateSubjectCard: React.FC<CreateSubjectCard> = ({ onClick }) => {
  return (
    <div onClick={() => onClick()}>
      <Item>
        <AddIcon />
        Cadastrar..
      </Item>
    </div>
  );
};

export default CreateSubjectCard;
