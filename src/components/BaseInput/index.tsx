import React, { useState } from 'react';
import { ContainerInput, Input, Container } from './style';

interface PropsBaseInput {
  name?: string;
  value?: string | number | undefined;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  borderRadius?: string;
  readonly?: boolean;
  onChangeActive?: (e: boolean) => void;
  onClick?: () => void;
  validationRules: ((value: string) => boolean | string)[];
}

const BaseInput: React.FC<PropsBaseInput> = ({
  name,
  value,
  placeholder,
  onChange,
  label,
  borderRadius,
  readonly,
  onChangeActive,
  onClick,
  validationRules,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !readonly) {
      onChange(e);
      setLocalValue(e.target.value);
    }
  };
  const handleSetActive = (active: boolean) => {
    setActive(active);
    if (onChangeActive) {
      onChangeActive(active);
    }
  };
  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(false);
    let errorFound = false;

    if (validationRules) {
      for (let i = 0; i < validationRules.length; i++) {
        const validationResult = validationRules[i](e.target.value);

        if (typeof validationResult === 'string') {
          setErrorText(validationResult);
          errorFound = true;
          break;
        }
      }
      if (!errorFound) {
        setErrorText('');
      }
    }
  };
  const handleOnclick = () => {
    if (onClick) {
      onClick();
    }
  };

  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [localValue, setLocalValue] = useState('');

  return (
    <Container>
      <ContainerInput
        active={active ? 'active' : ''}
        className={error ? 'error' : ''}
      >
        <label className={active || value != '' ? 'active' : ''}>
          {placeholder}
        </label>
        <Input
          className={`${error ? 'error' : ''}`}
          type='text'
          name={name}
          onChange={(e: any) => handleChange(e)}
          value={value}
          borderRadius={borderRadius}
          onFocus={() => handleSetActive(true)}
          onBlur={(e: any) => handleOnBlur(e)}
          onClick={handleOnclick}
          readOnly={readonly}
        />
      </ContainerInput>
      <div className='error-message'>{errorText}</div>
    </Container>
  );
};

export default BaseInput;
