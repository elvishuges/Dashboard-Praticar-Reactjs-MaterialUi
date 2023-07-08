import React, { useState } from 'react';
import {
  ContainerBaseCombobox,
  Container,
  ContainerBaseComboboxInput,
  ContainerComboboxList,
  ContainerComboboxItem,
} from './style';
import { click } from '@testing-library/user-event/dist/click';

interface ComboboxItem {
  text: string;
  id: string | number;
}

interface PropsBaseCombobox {
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
  items: Array<ComboboxItem>;
}

const BaseCombobox: React.FC<PropsBaseCombobox> = ({
  name,
  value,
  placeholder,
  onChange,
  borderRadius,
  readonly,
  onChangeActive,
  onClick,
  validationRules,
  items,
}) => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [localValue, setLocalValue] = useState('');
  const [showDropdownContent, setShowDropdownContent] =
    useState<boolean>(false);
  const [isOpenList, setIsOpenList] = useState(false);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Element;
    if (isOpenList && !target?.closest('.container-base-combobox')) {
      setIsOpenList(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenList]);

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
    setIsOpenList(true);
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

  const handleComboboxItemClick = (id: string | number) => {
    console.log('aqui');
    const clickedItem = items.find((item) => item.id === id);
    if (clickedItem) {
      setInputValue(clickedItem?.text);
    }
  };

  const handleOnclick = () => {
    if (!isOpenList) {
      setIsOpenList(true);
    }
    setIsOpenList(true);
  };

  return (
    <Container className='container-base-combobox'>
      <ContainerBaseCombobox>
        <label className={active || inputValue != '' ? 'active' : ''}>
          {placeholder}
        </label>
        <ContainerBaseComboboxInput
          className={`${error ? 'error' : ''}`}
          name={name}
          onChange={(e: any) => handleChange(e)}
          value={inputValue}
          borderRadius={borderRadius}
          onFocus={() => handleSetActive(true)}
          onBlur={(e: any) => handleOnBlur(e)}
          onClick={handleOnclick}
          readOnly={readonly}
        />
        {isOpenList && (
          <ContainerComboboxList className={active ? 'active' : ''}>
            {items.map((item, id) => (
              <ContainerComboboxItem
                key={id}
                onClick={() => handleComboboxItemClick(item.id)}
              >
                {item.text}
              </ContainerComboboxItem>
            ))}
          </ContainerComboboxList>
        )}
        <div className='error-message'>{errorText}</div>
      </ContainerBaseCombobox>
    </Container>
  );
};

export default BaseCombobox;
