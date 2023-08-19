import React, { useState } from 'react';
import { ContainerInput, Input, Container } from './style';

interface PropsBaseInput {
  name?: string;
  value?: string | number | undefined | any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius?: string;
  readonly?: boolean;
  onChangeActive?: (e: boolean) => void;
  onClick?: () => void;
  error?: any | '';
  type?: string;
  setHasError?: (value: boolean) => void;
}

const BaseInput = React.forwardRef<HTMLInputElement, PropsBaseInput>(
  (
    {
      name,
      value,
      onChange,
      onChangeActive,
      placeholder,
      readonly,
      setHasError,
      onClick,
      borderRadius,
      error,
      type,
      ...rest
    }: PropsBaseInput,
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange && !readonly) {
        onChange(e);
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
    };
    const handleOnclick = () => {
      if (onClick) {
        onClick();
      }
    };

    const [active, setActive] = useState(false);

    return (
      <Container>
        <ContainerInput
          active={active ? 'active' : ''}
          className={error ? 'error' : ''}
          onBlur={(e: any) => handleOnBlur(e)}
        >
          <label className={value !== '' ? 'active' : ''}>{placeholder}</label>
          <Input
            name={name}
            className={`${error ? 'error' : ''}`}
            type={type}
            onChange={(e: any) => handleChange(e)}
            ref={ref}
            value={value}
            borderRadius={borderRadius}
            onFocus={() => handleSetActive(true)}
            onClick={handleOnclick}
            readOnly={readonly}
            {...rest}
          />
        </ContainerInput>
        {error && <div className='error-message'>{error.message}</div>}
      </Container>
    );
  }
);

export default BaseInput;
