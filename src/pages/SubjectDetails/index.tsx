import React, { useCallback, useEffect, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Container } from './style';
import { SubjectDTO } from '../../types/dto/SubjectDTO';

import * as user from './../../services/user';
import { useParams } from 'react-router-dom';

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
    const { data }: ApiReturnType = await user.getSubjectById(id as string);

    setSubject(data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return <Container>Hello Subject {subject.description}</Container>;
};

export default SubjectDetails;
