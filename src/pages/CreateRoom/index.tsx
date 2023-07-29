import { useEffect, useState } from 'react';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Col, Row } from 'react-grid-system';
import { Container } from './style';
import * as user from './../../services/user';
import BaseSelect from '../../components/BaseSelect';
import { error } from 'console';

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

export default function CreateRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const [startDate, setStartDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const [topic, setTopic] = useState('');
  const [selectOption, setSelectOption] = useState<Option[]>([]);
  //const [startDate, setDate] = useState(new Date());
  const options: Option[] = [];

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const topicsData: Topic[] = await user.getAllTopic();

      const newOptions: Option[] = topicsData.map((topic) => ({
        value: topic.idTopic,
        label: topic.description,
      }));

      // Atualize o estado 'options' usando o novo array de opções
      setSelectOption([
        { label: 'Escolha o tópico', value: '' },
        ...newOptions,
      ]);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log('data', data);

    try {
      await user.createRoom(
        data.topic,
        data.description,
        data.meetLink,
        data.date
      );
    } catch (error) {}
  };

  const handleDateChange = (value: any) => {
    const valueDate = new Date(value);

    if (!isNaN(valueDate.getTime())) {
      setStartDate(valueDate);
    } else {
      console.error('Data inválida!');
      setStartDate(new Date());
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          {...register('description', {
            required: 'Campo Obrigatório',
          })}
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          placeholder='Descrição (ex: Vue é melhor que React)'
          error={errors.description}
        />
        <BaseInput
          {...register('meetLink', {
            required: false,
          })}
          value={meetLink}
          onChange={(e: any) => setMeetLink(e.target.value)}
          placeholder='Link Meet (Adicionar caso o evento estiver próximo)'
        />
        <Row>
          <Col sm={6}>
            <BaseInput
              {...register('date', {
                required: false,
              })}
              type='date'
              value={startDate.toISOString().split('T')[0]}
              placeholder='Data'
              onChange={(e: any) => handleDateChange(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          {topic}
          <Col sm={6}>
            <BaseSelect
              {...register('topic', {
                required: 'Campo Obrigatório',
              })}
              error={errors.topic}
              placeholder='Topic'
              name='topic'
              value={topic}
              options={selectOption}
            ></BaseSelect>
          </Col>
        </Row>
        <BaseButton type='submit' text='Criar Encontro' />
      </form>
    </Container>
  );
}
