import React, { useEffect, useRef, useState } from 'react';
import { Container, ContainerInput, OptionList } from './style';

//github.com/orgs/react-hook-form/discussions/2825

https: type Option = {
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
      const element = document.getElementById(name);
      console.log('element', element);

      if (element) {
        (element as HTMLSelectElement).value = selected as string;
        if (onChange) {
          onChange(selected);
        }
      }
    }, [selected]);

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    const onOnptionClick = (value: any) => {
      setSelected(value);
      setOpen(!isOpen);
    };

    return (
      <Container className='container-base-combobox'>
        <select
          className='html-select'
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
        </select>
        <div ref={selectRef}>
          <div>
            <ContainerInput onClick={() => setOpen((prev) => !prev)}>
              <div className='custom-select__trigger'>
                <span>
                  {options.find((item) => item.value === selected)?.label ||
                    'Select'}
                </span>
                <div className='arrow'></div>
              </div>
            </ContainerInput>
            <OptionList
              open={isOpen}
              className={`option-container ${isOpen && 'open'}`}
            >
              {options.map((item) => (
                <div
                  key={item.value}
                  onClick={() => {
                    onOnptionClick(item.value);
                  }}
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
            </OptionList>
          </div>
        </div>
        {error && <div className='error-message'>{error.message}</div>}
      </Container>
    );
  }
);

export default BaseSelect;
