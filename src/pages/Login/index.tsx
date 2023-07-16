import React, { useState } from 'react';
import { Container } from './style';
import BaseCard from '../../components/BaseCard';
import { Col, Row } from 'react-grid-system';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log('submitting...', data, email);
  };

  return (
    <Container>
      <BaseCard>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseInput
            {...register('email', {
              required: 'required field',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid field.',
              },
            })}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder='Email'
            error={errors.email}
          ></BaseInput>
          <BaseInput
            {...register('password', {
              required: 'required field',
            })}
            name='password'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder='Password'
            error={errors.password}
          ></BaseInput>
          <BaseButton type='submit' text='Submit' />
        </form>
      </BaseCard>
    </Container>
  );
}
