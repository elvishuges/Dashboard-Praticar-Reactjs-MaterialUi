import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import validationRules from './../../utils/validationRules';
import { Row, Col, Container } from 'react-grid-system';

export default function Home() {
  const [email, setImail] = useState('');
  const [name, setName] = useState('');

  interface SelectItem {
    id: string;
    text: string;
  }

  const rulesInput = [validationRules.validateName];

  return (
    <Container>
      {' '}
      <Row>
        <Col sm={6}>
          <BaseInput
            value={email}
            validationRules={rulesInput}
            onChange={(e) => setImail(e.target.value)}
            placeholder='Email'
          />
        </Col>
        <Col sm={6}>
          <BaseInput
            value={name}
            validationRules={rulesInput}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nome'
          />
        </Col>
      </Row>{' '}
    </Container>
  );
}
