import React, { useState } from 'react';
import { ContainerInput, Input, Container } from './style';

interface PropsBaseInput {
  name?: string;
  value?: string | number | undefined;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius?: string;
  readonly?: boolean;
  onChangeActive?: (e: boolean) => void;
  onClick?: () => void;
  validationRules: ((value: string) => boolean | string)[];
  setHasError?: (value: boolean) => void;
  type: string;
}

const BaseInput: React.FC<PropsBaseInput> = ({
  name,
  value,
  placeholder,
  onChange,
  borderRadius,
  readonly,
  onChangeActive,
  onClick,
  validationRules,
  setHasError,
  type,
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

          if (setHasError) {
            console.log('222', errorFound);

            setHasError(errorFound);
          }
          break;
        }
      }
      if (!errorFound) {
        if (setHasError) {
          setHasError(errorFound);
        }
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
          type={type}
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
