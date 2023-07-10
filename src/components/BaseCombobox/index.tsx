import React, { useEffect, useState } from 'react';
import {
  Container,
  ContainerCombobox,
  ContainerComboboxInput,
  ContainerComboboxList,
  ContainerComboboxItem,
} from './style';

interface ComboboxItem {
  text: string;
  id: string | number;
}

interface PropsBaseCombobox {
  name?: string;
  value?: string | number | undefined;
  placeholder?: string;
  onChange: (e: any | undefined) => void;
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
  const [isOpenList, setIsOpenList] = useState(false);

  useEffect(() => {
    // Função a ser chamada ao montar o componente
    if (value) {
      handleComboboxItemClick(value);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenList]);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Element;
    if (isOpenList && !target?.closest('.container-base-combobox')) {
      setIsOpenList(false);
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
    if (validationRules) {
      validateErros();
    }
  };

  const validateErros = () => {
    let errorFound = false;

    for (let i = 0; i < validationRules.length; i++) {
      const validationResult = validationRules[i](inputValue);

      if (typeof validationResult === 'string') {
        setErrorText(validationResult);
        errorFound = true;
        break;
      }
    }
    if (!errorFound) {
      setErrorText('');
    }
  };

  const handleComboboxItemClick = (id: string | number) => {
    const clickedItem = items.find((item) => item.id === id);
    if (clickedItem) {
      setErrorText('');
      setInputValue(clickedItem?.text);
      setIsOpenList(false);
      onChange(clickedItem.id);
    }
  };

  return (
    <Container className='container-base-combobox'>
      <ContainerCombobox>
        <label className={active || inputValue != '' ? 'active' : ''}>
          {placeholder}
        </label>
        <ContainerComboboxInput
          name={name}
          value={inputValue}
          borderRadius={borderRadius}
          onFocus={() => handleSetActive(true)}
          onBlur={(e: any) => handleOnBlur(e)}
          onChange={(e: any) => {}}
          readOnly={readonly}
        />

        <ContainerComboboxList className={active ? 'active' : ''}>
          {' '}
          {isOpenList &&
            items.map((item, id) => (
              <ContainerComboboxItem
                key={id}
                onClick={() => handleComboboxItemClick(item.id)}
              >
                {item.text}
              </ContainerComboboxItem>
            ))}
        </ContainerComboboxList>
      </ContainerCombobox>
      <div className='error-message'>{errorText}</div>
    </Container>
  );
};

export default BaseCombobox;
