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
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  error: any;
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
    const [selected, setSelected] = useState('');
    const [isOpen, setOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(event.target.value);
    };
    const handleSelectedValue = (value: any) => {
      setSelected(value);
    };

    const handleSelectchange = (value: any) => {
      console.log('value', value);
    };

    useEffect(() => {
      console.log('name', name);
      const element = document.getElementById(name);
      console.log('element', element);
      if (element) {
        (element as HTMLSelectElement).value = selected as string;
        console.log('element22', element);
      }
    }, [selected]);

    const handleSelectClick = () => {
      setOpen(!isOpen);
    };

    const handleOptionClick = (optionValue: any) => {
      setOpen(false);
      onChange(optionValue);
    };

    return (
      <Container className='container-base-combobox'>
        <ContainerSelect ref={ref} name={name} id={name} {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          {isOpen && (
            <OptionList>
              {options.map((option) => (
                <OptionItem
                  key={option.value}
                  selected={option.value === value}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </OptionItem>
              ))}
            </OptionList>
          )}
        </ContainerSelect>
        {/* <ContainerCustomSelect
          ref={selectRef}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className={`custom-select ${isOpen && 'open'}`}>
            <div className='custom-select__trigger'>
              <span>
                {options.find((item) => item.value === selected)?.label ||
                  'Select'}
              </span>
              <div className='arrow'></div>
            </div>
            <div className='custom-options'>
              {options.map((item) => (
                <div
                  key={item.value}
                  onClick={() => {
                    setSelected(item.value);
                  }}
                  className='option-container'
                >
                  <span
                    className={`custom-option ${
                      selected === item.value && 'selected'
                    } `}
                    data-value={item.value}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ContainerCustomSelect> */}
        {error && <span>{error.message}</span>}
      </Container>
    );
  }
);

export default BaseSelect;
