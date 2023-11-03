import { useState, useEffect, useCallback } from 'react';

import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import SectionDashbaord from '../../components/SectionsDashboard';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateSubjectDialog from '../../components/modals/CreateSubjectDialog';
import SnackBar from '../../components/utils/SnackBar';

import * as user from './../../services/user';
import { SectionDTO } from '../../types/dto/SectionDTO';
import { log } from 'util';
type FormType = {
  description: string;
  sectionId: string;
};

type Subject = {
  description: String;
  id: String;
};

export default function Home() {
  const navigate = useNavigate();
  const [openOpenCreateSubjecDialog, setOpenCreateSubjecDialog] =
    useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [sectionsList, setSectionList] = useState<SectionDTO[]>([]);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const onCreateSubject = async (form: FormType) => {
    setOpenCreateSubjecDialog(false);
    try {
      type ApiReturnType = { data: SectionDTO };
      const { data }: ApiReturnType = await user.createSubject(form);
      addSubjectToSection(data, form);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addSubjectToSection = (subject: SectionDTO, form: FormType) => {
    for (let index = 0; index < sectionsList.length; index++) {
      const section = sectionsList[index];
      if (section.id == form.sectionId) {
        sectionsList[index].subjects.push(subject);
        const newArray = [...sectionsList];
        setSectionList(newArray);
      }
    }
  };

  const onSectionDashbaordItemClick = (item: Subject) => {
    navigate(`subject-details/${item.id}`);
  };

  const fetchData = useCallback(async () => {
    type ApiReturnType = { data: SectionDTO[] };
    const { data }: ApiReturnType = await user.getAllSection();
    setSectionList(data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <Container>
      <SectionDashbaord
        onItemClick={(item: any) => onSectionDashbaordItemClick(item)}
        items={sectionsList}
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
