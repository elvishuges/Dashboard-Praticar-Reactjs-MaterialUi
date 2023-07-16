import React, { ReactNode } from 'react';
import { Container } from './style';

type Props = {
  children: ReactNode;
  title?: string;
};

const BaseCard: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <div className='title'>{title}</div>
      <div className='card-content'>{children}</div>
    </Container>
  );
};

export default BaseCard;
