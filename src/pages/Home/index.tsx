import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import validationRules from './../../utils/validationRules';
import { Row, Col, Container } from 'react-grid-system';
import BaseButton from '../../components/BaseButton';

export default function Home() {
  const [email, setImail] = useState('');
  const [hasEmailerror, setHasEmailerror] = useState(false);
  const [name, setName] = useState('');

  interface SelectItem {
    id: string;
    text: string;
  }

  const rulesName = [validationRules.validateName];
  const rulesEmail = [validationRules.validateEmail];

  const handleSubmit = () => {
    console.log('Submit');
  };
  const set = (value: boolean) => {
    setHasEmailerror(value);
    console.log('Submit22', hasEmailerror, value);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <BaseInput
            type={'text'}
            value={email}
            setHasError={(value: boolean) => set(value)}
            validationRules={rulesEmail}
            onChange={(e) => setImail(e.target.value)}
            placeholder='Email'
          />
        </Col>
      </Row>
      <Row>
        {' '}
        <Col sm={6}>
          <BaseButton onButtonClick={handleSubmit} text='Enviar' />
        </Col>
      </Row>{' '}
    </Container>
  );
}
