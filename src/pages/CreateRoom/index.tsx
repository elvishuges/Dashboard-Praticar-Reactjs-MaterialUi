import { useEffect, useState } from 'react';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Col, Row } from 'react-grid-system';
import { Container } from './style';
import * as user from './../../services/user';
import BaseSelect from '../../components/BaseSelect';
import { error } from 'console';
import LocalStorageService from '../../services/localstorage';
import SnackBar from '../../components/utils/SnackBar';
import { AnyCnameRecord } from 'dns';
import { useParams } from 'react-router-dom';
import { RoomData } from '../../types/RoomDTO';

//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

type FormInputs = {
  description: string;
  meetLink: string;
  date: string;
  topic: string;
};

type Option = {
  value: string;
  label: string;
};

type Topic = {
  idTopic: string;
  description: string;
};

const hours = ['12', '24', '36'];

export default function CreateRoom() {
  let { id } = useParams();
  console.log('id', id);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const [startDate, setStartDate] = useState('');
  const [description, setDescription] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const [topic, setTopic] = useState('');

  const [room, serRoom] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState('Hello');
  const [selectOption, setSelectOption] = useState<Option[]>([]);
  const [mode, setMode] = useState('create');
  //const [startDate, setDate] = useState(new Date());
  const options: Option[] = [];

  useEffect(() => {
    setMode('create');
    loadTopics().then(() => {
      if (id) {
        loadRoomById(id);
      }
    });
  }, []);

  const loadRoomById = async (id: string) => {
    try {
      const room: RoomData = await user.getRoomById(id);
      //setDescription(room.description);
      //setMeetLink(room.meetLink);
      //setStartDate(room.date);
      setTopic(room.topic?.idTopic || '');

      setValue('description', room.description);
      setValue('meetLink', room.meetLink);
      setValue('date', room.date);
      setValue('topic', room.topic?.idTopic || '');
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const loadTopics = async () => {
    try {
      const topicsData: Topic[] = await user.getAllTopic();

      const newOptions: Option[] = topicsData.map((topic) => ({
        value: topic.idTopic,
        label: topic.description,
      }));

      setSelectOption([
        { label: 'Escolha o tópico', value: '' },
        ...newOptions,
      ]);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const logedUser = LocalStorageService.getItem('@change-my-mind:user');
    setLoading(true);

    try {
      await user.createRoom(
        logedUser.id,
        data.topic,
        data.description,
        data.meetLink,
        data.date
      );
      setSnackMessage('Sala Criada com Sucesso!!!');
      setShowSnack(true);
      resetForm();
    } catch (error: any) {
      const { response } = error;
      setSnackMessage(response.data.message);
      setShowSnack(true);
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMeetLink('');
    setDescription('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          {...register('description', {
            required: 'Campo Obrigatório',
          })}
          name='description'
          placeholder='Descrição (ex: Vue é melhor que React)'
          onChange={(e: any) => setDescription(e.target.value)}
          error={errors.description}
        />
        <BaseInput
          {...register('meetLink', {
            required: false,
          })}
          onChange={(e: any) => setMeetLink(e.target.value)}
          placeholder='Link Meet (Adicionar caso o evento estiver próximo)'
        />
        <Row>
          <Col sm={6}>
            <BaseInput
              {...register('date', {
                required: 'Campo Obrigatório',
              })}
              type='datetime-local'
              placeholder='Data'
              onChange={(e: any) => setStartDate(e.target.value)}
              error={errors.date}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <BaseSelect
              {...register('topic', {
                required: 'Campo Obrigatório',
              })}
              placeholder='Topic'
              name='topic'
              options={selectOption}
              onChange={(value) => setTopic(value)}
              error={errors.topic}
            ></BaseSelect>
          </Col>
        </Row>
        <BaseButton loading={loading} type='submit' text='Criar Encontro' />
      </form>
      <SnackBar
        active={showSnack}
        setActive={() => setShowSnack(false)}
        message={snackMessage}
      />
    </Container>
  );
}
