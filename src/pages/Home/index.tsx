import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import { Row, Col, Container } from 'react-grid-system';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import BaseCombobox from '../../components/BaseCombobox';
import validator from '../../utils/validationRules';
import Select from '../../components/oldSelect';
import SelectElement from '../../components/BaseSelect';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

type Inputs = {
  email: string;
  name: string;
  cargo: string;
  dog: string;
  cat: string;
};

interface ComboboxItem {
  text: string;
  id: string | number;
}

const state = {
  dog: '',
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [cat, setCat] = useState('');
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('submitting...', data, email);
  };

  const handleItemSelected = (value: any) => {
    console.log('value', value);

    setCargo(value);
  };

  const handleChange = (value: any) => {
    console.log('value', value);
    setCat(value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={6}>
            <BaseInput
              {...register('email', {
                required: false,
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
                required: false,
              })}
              name='name'
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder='Nome'
              error={errors.name}
            />
          </Col>
          <Col sm={6}>
            {cargo}
            {/* <BaseCombobox
              options={[
                { value: 'husky', label: 'Husky' },
                { value: 'bullDog', label: 'Bull Dog' },
                { value: 'dobermann', label: 'Dobermann' },
              ]}
              selectProps={{
                ...register('cargo', {
                  required: 'This is a required field',
                  minLength: 1,
                }),
              }}
              name='cargo'
              placeholder='Cargo'
              value={cargo}
              error={errors.cargo}
              onItemSelected={(value) => handleItemSelected(value)}
            /> */}
          </Col>
          <Col sm={6}>
            <SelectElement
              options={[
                { value: 'husky', label: 'Husky' },
                { value: 'bullDog', label: 'Bull Dog' },
                { value: 'dobermann', label: 'Dobermann' },
              ]}
              {...register('cat', {
                required: false,
              })}
              name='cat'
              value={cat}
              onChange={handleChange}
              placeholder='Nome'
              error={errors.cat}
            />
          </Col>
          <Col sm={6}></Col>
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
