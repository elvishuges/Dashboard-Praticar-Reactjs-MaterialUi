import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import BaseButton from '../../components/BaseButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import BaseCombobox from '../../components/BaseCombobox';
import validator from '../../utils/validationRules';
import Select from '../../components/oldSelect';
import SelectElement from '../../components/BaseSelect';
import Navbar from '../../components/NavBar';
import { Container } from './style';
import RoomCard from '../../components/RoomCard';
import { Col, Row } from 'react-grid-system';
//https://www.codevertiser.com/reusable-input-component-react/
// https://stackblitz.com/edit/reusable-rhf-ts-pt6?file=src%2Fcomponents%2Forganisms%2Fregistration-form.tsx
// select

export default function Home() {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <RoomCard />
        </Col>
        <Col sm={3}>
          <RoomCard />
        </Col>
        <Col sm={3}>
          <RoomCard />
        </Col>
      </Row>
    </Container>
  );
}
