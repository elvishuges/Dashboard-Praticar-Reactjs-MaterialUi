import { useState } from 'react';
import { Container, ContainerInput, OptionList } from './style';

//github.com/orgs/react-hook-form/discussions/2825

type Option = {
  value: string;
  label: string;
};

interface SelectElementProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  customOptions: Option[];
  error?: string;
}

const BaseSelect = ({
  error,
  customOptions,
  onChange,
  ...rest
}: SelectElementProps) => {
  const [isOpen, setOpen] = useState(false);

  const selectedValue = rest.value;

  // pass the selected value to the parent component

  const handleSelect = (value: string) => {
    if (!onChange) return console.log('onChange is not defined');

    const fakeChangeEvent = {
      target: {
        value,
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(fakeChangeEvent);
    setOpen(false);
  };

  return (
    <Container className='container-base-combobox'>
      <select>
        {customOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <div>
          <ContainerInput onClick={() => setOpen((prev) => !prev)}>
            <div className='custom-select__trigger'>
              <span>{selectedValue || 'Select'}</span>
              <div className='arrow'></div>
            </div>
          </ContainerInput>
          <OptionList
            open={isOpen}
            className={`option-container ${isOpen && 'open'}`}
            onBlur={() => setOpen(false)}
          >
            {customOptions.map((item) => (
              <div key={item.value} onClick={() => handleSelect(item.value)}>
                <span
                  className={`custom-option ${
                    selectedValue === item.value && 'selected'
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
      {error && <div className='error-message'>{error}</div>}
    </Container>
  );
};

export default BaseSelect;
