import React, { useState } from 'react';
import { Container } from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Stack } from '@mui/material';
import * as auth from './../../services/auth';

type FormInputs = {
  username: string;
  email: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsLoading(true);
      setAlertMessage('');

      const response = await auth.register({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      setAlertMessage(response.data.message);
    } catch (error: any) {
      console.log('error', error);
      setAlertMessage(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>Register</h2>
      <Box
        m={1} //margin
        display='flex'
        justifyContent='flex-start'
        alignItems='flex-start'
      ></Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type='username'
          variant='outlined'
          color='secondary'
          label='Nome'
          {...register('username', { required: true })}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
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
            Cadastrar
          </Button>
        </Box>
      </form>
      <small>
        Já possui uma conta? <Link to='/login'>Login</Link>
      </small>
    </Container>
  );
}
