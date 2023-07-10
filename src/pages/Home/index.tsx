import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import { Row, Col, Container } from 'react-grid-system';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx

type Inputs = {
  email: string;
  name: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('submitting...', data, email);
  };

  const emailPattern = {
    value: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
    message: 'Digite um email válido',
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={6}>
            <BaseInput
              {...register('email', {
                required: 'Email Obrigatório',
                pattern: emailPattern,
              })}
              name='email'
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder='Email'
              error={errors.email}
            />
          </Col>
          <Col sm={6}>
            <BaseInput
              {...register('name', {
                required: 'Nome Obrigatório',
              })}
              name='name'
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder='Nome'
              error={errors.name}
            />
          </Col>
        </Row>
        <Row>
          {' '}
          <Col sm={6}>
            <BaseButton type={'submit'} text='Enviar' />
          </Col>
        </Row>{' '}
      </form>
    </Container>
  );
}
