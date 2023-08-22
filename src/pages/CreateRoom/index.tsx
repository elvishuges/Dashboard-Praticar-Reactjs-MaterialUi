import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput';
import BaseSelect from '../../components/BaseSelect';
import SnackBar from '../../components/utils/SnackBar';
import LocalStorageService from '../../services/localstorage';
import { RoomData } from '../../types/RoomDTO';
import * as user from './../../services/user';
import { Container } from './style';

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

const options: Option[] = [
  {
    value: '954afa7f-88b0-4bdc-a869-3a51a3e1b49a',
    label: 'Aleatório',
  },
  {
    value: '954afa1231231369-3a51a3e1b49a',
    label: 'Aleatório 2',
  },
];

export default function CreateRoom() {
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isLoading },
  } = useForm<FormInputs>({
    defaultValues: {
      description: '',
      meetLink: '',
      date: '',
    },
    mode: 'onChange',
  });

  const { topic } = watch();
  console.log('topic', topic);

  const [room, serRoom] = useState(null);
  const [showSnack, setShowSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState('Hello');
  const [selectOption, setSelectOption] = useState<Option[]>([]);
  const [mode, setMode] = useState('create');
  //const [startDate, setDate] = useState(new Date());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadRoomById = async (id: string) => {
    try {
      const room: RoomData = await user.getRoomById(id);

      setValue('description', room.description);
      setValue('meetLink', room.meetLink);
      setValue('date', room.date);
      setValue('topic', room.topic?.idTopic || '');
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };
  useEffect(() => {
    setMode('create');
    loadTopics();
    if (id) {
      setMode('update');
      loadRoomById(id);
    }
  }, [id, loadRoomById]);

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

    await createUpdateRoom(
      logedUser.id,
      data.topic,
      data.description,
      data.meetLink,
      data.date
    );
  };

  const createUpdateRoom = async (
    description: string,
    meetLink: string,
    date: string,
    topic: string,
    userId: string
  ) => {
    try {
      let message = '';
      if (mode == 'create') {
        message = 'Sala Criada com Sucesso!!!';
        await user.createRoom(description, meetLink, date, topic, userId);
      } else {
        message = 'Sala Editada com Sucesso!!!';
        await user.updateRoom(
          id || '',
          description,
          meetLink,
          date,
          topic,
          userId
        );
      }
      setSnackMessage(message);
      setShowSnack(true);
      reset();
    } catch (error: any) {
      setSnackMessage(error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          {...register('description', {
            required: 'Campo Obrigatório',
          })}
          name='description'
          placeholder='Descrição'
          error={errors.description?.message}
        />
        <BaseInput
          {...register('meetLink', {
            required: false,
          })}
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
              error={errors.date?.message}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <BaseSelect
              {...register('topic', {
                required: 'Campo Obrigatório',
              })}
              name='topic'
              error={errors.topic?.message}
              customOptions={options}
              onChange={(e) => setValue('topic', e.target.value)}
            />
          </Col>
        </Row>
        <BaseButton
          loading={isLoading}
          type='submit'
          text={mode == 'create' ? 'Criar Encontro' : 'Editar Encontro'}
        />
      </form>
      <SnackBar
        active={showSnack}
        setActive={() => setShowSnack(false)}
        message={snackMessage}
      />
    </Container>
  );
}
