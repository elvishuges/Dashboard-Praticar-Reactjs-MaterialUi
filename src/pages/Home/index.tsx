import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import { Container } from './style';
import validationRules from './../../utils/validationRules';
import BaseCombobox from '../../components/BaseCombobox';

export default function Home() {
  const [email, setImail] = useState('elvishugeshotmail.com');
  const [cargo, setCargo] = useState('');

  interface SelectItem {
    id: string;
    text: string;
  }

  const items: SelectItem[] = [
    {
      id: 'vsertbyui',
      text: 'Smartphone',
    },
    {
      id: 'ertersvert',
      text: 'Mochila',
    },
  ];

  const rulesInput = [
    validationRules.validateName,
    validationRules.validateEmail,
  ];
  const rulesCombo = [validationRules.validateName];

  return (
    <Container>
      <div>
        <BaseInput
          value={email}
          validationRules={rulesInput}
          onChange={(e) => setImail(e.target.value)}
          placeholder='Email'
        />
      </div>
      <div>
        <BaseCombobox
          items={items}
          validationRules={rulesCombo}
          placeholder='Cargo'
        />
      </div>
    </Container>
  );
}
