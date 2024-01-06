import React, { useCallback, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Container } from './style';
import { SubjectDTO } from '../../types/dto/SubjectDTO';

import { useNavigate, useParams } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SnackBar from '../../components/utils/SnackBar/SnackBar';

import * as user from './../../services/user';
import ConfirmDialog from '../../components/utils/ConfirmDialog/ConfirmDialog';
type SubjectDetailsProp = {
  open: boolean;
};

const SubjectDetails: React.FC = ({}) => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState<SubjectDTO>({
    description: '',
    id: '',
  });

  const [label, setLabel] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

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

  const deleteSubjectById = async (id: string) => {
    try {
      await user.deleteSubjectItem(id as string);
      setShowConfirmDialog(false);
      setShowSnackBar(true);
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <Container>
      Hello Subject {subject.description}
      <Fab
        onClick={() => setShowConfirmDialog(true)}
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
      >
        <AddIcon />
      </Fab>
      <ConfirmDialog
        visible={showConfirmDialog}
        onAgree={() => deleteSubjectById(subject.id)}
        onClose={() => setShowConfirmDialog(false)}
      />
      <SnackBar
        active={showSnackBar}
        setActive={() => setShowSnackBar(false)}
        message={'Item Deletado com Sucesso!'}
      />
    </Container>
  );
};

export default SubjectDetails;
