import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  ContainerCustomSelect,
  ContainerSelect,
  OptionItem,
  OptionList,
} from './style';

type Option = {
  value: string;
  label: string;
};

interface SelectElementProps {
  options: Option[];
  defaultValue?: string;
  name: string;
  value?: string;
  onChange?: (e: any) => void;
  placeholder: string;
  error?: any;
}

const BaseSelect = React.forwardRef<HTMLSelectElement, SelectElementProps>(
  (
    {
      options,
      defaultValue,
      name,
      value,
      onChange,
      placeholder,
      error,
      ...rest
    }: SelectElementProps,
    ref
  ) => {
    const selectRef = useRef(null);
    const [selected, setSelected] = useState(value);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
      console.log('name', name);
      const element = document.getElementById(name);
      console.log('element', element);
      if (element) {
        (element as HTMLSelectElement).value = selected as string;
        console.log('selected', selected);
        if (onChange) {
          onChange(selected);
        }
      }
    }, [selected]);

    const handleSelectClick = () => {
      setOpen(!isOpen);
    };

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <Container className='container-base-combobox'>
        <ContainerSelect
          onChange={(e: any) => onChangeSelect(e)}
          value={value}
          ref={ref}
          name={name}
          id={name}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </ContainerSelect>

        {error && <div className='error-message'>{error.message}</div>}
      </Container>
    );
  }
);

export default BaseSelect;
