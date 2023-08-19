import React, { useState } from 'react';
import { Container } from './style';
import BaseCard from '../../components/BaseCard';
import { Col, Row } from 'react-grid-system';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';

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

  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessagte] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsLoading(true);
      setAlertMessagte('');
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      setAlertMessagte('Email ou Senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <BaseCard title='Sign Up'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseInput
            {...register('email', {
              required: 'Campo Obrigatório',
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
              required: 'Campo Obrigatório',
            })}
            name='password'
            type='password'
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            placeholder='Password'
            error={errors.password}
          ></BaseInput>
          <BaseButton
            loading={isLoading}
            type='submit'
            background='#222222'
            text='Submit'
          />
          {alertMessage && <div className='error_message'> {alertMessage}</div>}
        </form>
      </BaseCard>
    </Container>
  );
}
