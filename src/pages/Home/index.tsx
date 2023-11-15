import { useState, useEffect, useCallback } from 'react';

import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import SectionDashbaord from '../../components/SectionsDashboard';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SimpleInputDialog from '../../components/modals/SimpleInputDialog';
import SnackBar from '../../components/utils/SnackBar';

import * as user from './../../services/user';
import { SectionDTO } from '../../types/dto/SectionDTO';
import { log } from 'util';
import { SubjectDTO } from '../../types/dto/SubjectDTO';
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
  const [openCreateSubjecDialog, setOpenCreateSubjecDialog] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [sectionsList, setSectionList] = useState<SectionDTO[]>([]);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [sectonIdToCreate, setSectonIdToCreate] = useState('');

  const createSubject = async (
    subjectDescription: string,
    sectionId: string
  ) => {
    try {
      type ApiReturnType = { data: SubjectDTO };
      const payload = {
        description: subjectDescription,
        sectionId: sectionId,
      };
      const { data }: ApiReturnType = await user.createSubject(payload);
      setOpenCreateSubjecDialog(false);
      addSubjectToSection(data);
      setSectonIdToCreate('');
    } catch (error) {
      console.log('error', error);
    }
  };
  const createSection = async (sectionDescription: string) => {
    try {
      type ApiReturnType = { data: SubjectDTO };
      const payload = {
        description: sectionDescription,
      };
      const { data }: ApiReturnType = await user.createSection(payload);
      setOpenCreateSubjecDialog(false);
      fetchData();
    } catch (error) {
      console.log('error', error);
    }
  };

  const addSubjectToSection = (subject: SubjectDTO) => {
    for (let index = 0; index < sectionsList.length; index++) {
      const section = sectionsList[index];
      if (section.id == sectonIdToCreate) {
        sectionsList[index].subjects.push(subject);
        const newArray = [...sectionsList];
        setSectionList(newArray);
      }
    }
  };
  const onCreateDialogClick = (inputText: string) => {
    if (sectonIdToCreate) {
      createSubject(inputText, sectonIdToCreate);
    } else {
      createSection(inputText);
    }
  };

  const onSectionDashbaordItemClick = (item: Subject) => {
    navigate(`subject-details/${item.id}`);
  };
  const onCreateSubjectClick = (sectionId: string) => {
    setSectonIdToCreate(sectionId);
    setOpenCreateSubjecDialog(true);
  };

  const fetchData = useCallback(async () => {
    type ApiReturnType = { data: SectionDTO[] };
    const { data }: ApiReturnType = await user.getMySections();
    setSectionList(data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <Container>
      <SectionDashbaord
        createSubjectClick={(sectionId: string) =>
          onCreateSubjectClick(sectionId)
        }
        onItemClick={(item: any) => onSectionDashbaordItemClick(item)}
        items={sectionsList}
      />
      <Fab
        sx={{
          position: 'fixed',
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(4),
        }}
        aria-label='add'
        variant='extended'
        onClick={() => setOpenCreateSubjecDialog(true)}
      >
        <AddIcon />
      </Fab>
      <SimpleInputDialog
        open={openCreateSubjecDialog}
        onCreate={(inputText: string) => onCreateDialogClick(inputText)}
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
