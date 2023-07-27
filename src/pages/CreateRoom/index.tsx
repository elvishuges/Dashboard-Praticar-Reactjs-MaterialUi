import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Col, Row } from 'react-grid-system';
import { Container } from './style';
import * as user from './../../services/user';

//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

type FormInputs = {
  description: string;
  meetLink: string;
  date: string;
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
  //const [startDate, setDate] = useState(new Date());

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await user.createRoom(
        'e536f29b-d30e-4f5c-9f7c-ff4fd2bfba6c',
        data.description,
        data.meetLink,
        data.date
      );
    } catch (error) {}
  };

  const handleDateChange = (value: any) => {
    const value2 = new Date(value);

    if (!isNaN(value2.getTime())) {
      setStartDate(value2);
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
        <BaseButton type='submit' text='Criar Encontro' />
      </form>
    </Container>
  );
}
