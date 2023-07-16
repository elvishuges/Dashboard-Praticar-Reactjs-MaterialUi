import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  ContainerCombobox,
  ContainerComboboxInput,
  ContainerComboboxList,
  ContainerComboboxItem,
  ContainerCustomSelect,
} from './style';
import useOutsideClick from '../../hooks/useOutSideClick';

type Option = {
  value: string;
  label: string;
};

interface PropsBaseCombobox {
  name: string;
  value?: string | number | undefined;
  placeholder?: string;
  label?: string;
  borderRadius?: string;
  readonly?: boolean;
  onChangeActive?: (e: boolean) => void;
  onClick?: () => void;
  onItemSelected: (e: any) => void;

  error?: any | '';
  selectProps: object;
  options: Option[];
}

const BaseCombobox = React.forwardRef<HTMLSelectElement, PropsBaseCombobox>(
  (
    {
      name,
      value,
      placeholder,
      options,
      error,
      selectProps,
      onItemSelected,
      ...rest
    }: PropsBaseCombobox,
    ref
  ) => {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState(value);
    const selectRef = useRef(null);

    useOutsideClick(selectRef, () => {
      setOpen(false);
    });

    const handleItemClick = (value: string | number | undefined) => {
      onItemSelected(value);
      setSelected(value);
    };

    useEffect(() => {
      const element = document.getElementById(name);
      console.log('element', element);
      if (element) {
        (element as HTMLSelectElement).value = selected as string;
      }
    }, [selected]);

    return (
      <Container className='container-base-combobox'>
        <ContainerCombobox>
          <label className={isOpen || value != '' ? 'active' : ''}>
            {placeholder}
          </label>
          <select
            ref={ref}
            value={selected}
            id={name}
            name={name}
            className='html-select'
            {...rest}
          >
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <ContainerCustomSelect
            ref={selectRef}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            {selected}
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
                      handleItemClick(item.value);
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
          </ContainerCustomSelect>
        </ContainerCombobox>
        {error && <div className='error-message'>{error.message}</div>}
      </Container>
    );
  }
);
export default BaseCombobox;
