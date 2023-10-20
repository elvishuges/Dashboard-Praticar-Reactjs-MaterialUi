import { useState, useEffect, useCallback } from 'react';

import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import SectionDashbaord from '../../components/SectionsDashboard';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateSubjectDialog from '../../components/modals/CreateSubjectDialog';
import SnackBar from '../../components/utils/SnackBar';

import * as user from './../../services/user';
type FormType = {
  description: string;
  sectionId: string;
};

type Section = {
  bgColor: string;
  description: string;
  subjects: Subject[];
};
type Subject = {
  description: string;
};
const sections: Section[] = [
  {
    description: 'Segunda',
    bgColor: '#034485',
    subjects: [],
  },
  {
    description: 'Terça',
    bgColor: '#D1382E',
    subjects: [],
  },
  {
    description: 'Quarta',
    bgColor: '#13599E',
    subjects: [],
  },
  {
    description: 'Quinta',
    bgColor: '#1510DE',
    subjects: [],
  },

  {
    description: 'Domingo',
    bgColor: 'red',
    subjects: [],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [openOpenCreateSubjecDialog, setOpenCreateSubjecDialog] =
    useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [sectionsList, setSectionList] = useState([]);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const onCreateSubject = (form: FormType) => {
    addSubjectInSection(form);
    setOpenCreateSubjecDialog(false);
  };

  const onSectionDashbaordItemClick = (item: any) => {
    navigate('subject-details');
  };

  const fetchData = useCallback(async () => {
    const response = await user.getAllSection();

    setSectionList(response.data);
  }, []);

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [fetchData]);

  const addSubjectInSection = (form: FormType) => {
    let added = false;
    try {
      for (let index = 0; index < sections.length; index++) {
        if (sections[index].description == form.description) {
          const subject: Subject = { description: form.description };
          sections[index].subjects.push(subject);
          setShowSnackBar(true);
          setSnackBarMessage('Item cadastrado com sucesso');
          added = true;
        }
      }
      if (!added) {
        throw Error('Sessão Não Encontrado');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <SectionDashbaord
        onItemClick={(item: any) => onSectionDashbaordItemClick(item)}
        items={sections}
      />
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(4),
        }}
        color='primary'
        aria-label='add'
        variant='extended'
        onClick={() => setOpenCreateSubjecDialog(true)}
      >
        <AddIcon />
      </Fab>
      <CreateSubjectDialog
        open={openOpenCreateSubjecDialog}
        onCreate={(form: FormType) => onCreateSubject(form)}
        setOpen={(value) => setOpenCreateSubjecDialog(value)}
      />
      <SnackBar
        active={showSnackBar}
        setActive={() => setShowSnackBar(false)}
        message={snackBarMessage}
      />
    </Container>
  );
}
