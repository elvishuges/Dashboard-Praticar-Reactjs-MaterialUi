import React, { useState } from 'react';
import { Container } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Stack } from '@mui/material';

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
  const [alertMessage, setAlertMessage] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsLoading(true);
      setAlertMessage('');
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      console.log('error', error);
      setAlertMessage('Email ou Senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Box
        m={1} //margin
        display='flex'
        justifyContent='flex-start'
        alignItems='flex-start'
      ></Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type='email'
          variant='outlined'
          color='secondary'
          label='Email'
          {...register('email', { required: true })}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          type='password'
          variant='outlined'
          color='secondary'
          label='Password'
          required
          {...register('password', { required: true })}
          fullWidth
          sx={{ mb: 1 }}
        />
        {alertMessage && <div className='error_message'> {alertMessage}</div>}
        <Box display='flex' justifyContent='flex-end' alignItems='flex-end'>
          <Button
            disabled={isLoading}
            variant='outlined'
            color='secondary'
            type='submit'
          >
            Login
          </Button>
        </Box>
      </form>
      <small>
        Não possue uma conta? <Link to='/register'>Cadatro</Link>
      </small>
    </Container>
  );
}
