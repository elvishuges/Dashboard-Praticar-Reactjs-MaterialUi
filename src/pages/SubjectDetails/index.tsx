import React, { useCallback, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Container } from './style';
import { SubjectDTO } from '../../types/dto/SubjectDTO';

import { useParams } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import * as user from './../../services/user';
type SubjectDetailsProp = {
  open: boolean;
};

const SubjectDetails: React.FC = ({}) => {
  const [subject, setSubject] = useState<SubjectDTO>({
    description: '',
    id: '',
  });

  const [label, setLabel] = useState('');
  let { id } = useParams();

  const fetchData = useCallback(async () => {
    type ApiReturnType = { data: SubjectDTO };
    try {
      const { data }: ApiReturnType = await user.getSubjectById(id as string);
      setSubject(data);
    } catch (error) {
      console.log('ERROR', error);
    }
  }, []);

  const onCreateSectionClick = () => {
    console.log('aquiii');
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <Container>
      Hello Subject {subject.description}
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(12),
        }}
        color='secondary'
        aria-label='edit'
      >
        <DeleteIcon />
      </Fab>
      <Fab
        color='primary'
        aria-label='add'
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(4),
        }}
        onClick={() => onCreateSectionClick()}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default SubjectDetails;
