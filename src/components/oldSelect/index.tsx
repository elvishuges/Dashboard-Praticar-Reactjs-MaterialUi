import React, { useState, useRef, useEffect } from 'react';
import { Container } from './style';
import useOutsideClick from '../../hooks/useOutSideClick';

type Option = {
  value: string;
  label: string;
};
type Props = {
  options: Option[];
  selectProps: object;
  value?: string;
  error?: boolean;
  name: string;
};

const Select = ({
  options,
  selectProps,
  value,
  error = false,
  name,
}: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    const element = document.getElementById(name);
    console.log('element', element);
    if (element) {
      (element as HTMLInputElement).value = selected as string;
    }
  }, [selected]);

  return (
    <Container isOpen={isOpen} error={error}>
      <select {...selectProps} id={name} name={name} className='html-select'>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div
        ref={selectRef}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className='custom-select-wrapper'
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
      </div>
    </Container>
  );
};

export default Select;
