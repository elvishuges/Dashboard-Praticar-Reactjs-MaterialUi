import styled from 'styled-components';

interface ContainerProps {
  borderRadius?: string;
  active?: string;
}

interface ContainerComboboxProps {
  borderRadius?: string;
  readOnly?: boolean;
}

interface ContainerComboboxInputProps {
  borderRadius?: string;
  readOnly?: boolean;
}

interface ComboboxListProps {}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80px;

  .error-message {
    color: red;
    font-size: 0.8rem !important;
  }
`;
export const ContainerCombobox = styled.div<ContainerComboboxProps>`
  font-family: 'Arial';
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-color: #f5f5f5;
  border-bottom-color: #a5a5a5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  .html-select {
    display: none;
  }

  label {
    margin-left: 8px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: grey;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 5px) scale(1);
    transform-origin: left top;
    transition: all 0.2s ease-out;

    &.active {
      transform: translate(0, -10px) scale(0.75);
    }
  }
`;
export const ContainerComboboxInput = styled.input<ContainerComboboxInputProps>`
  color: palevioletred;
  background-color: #f5f5f5;
  border: 0;
  outline: none;
  width: 100%;
  height: 35px;
  padding-top: 15px;
  border-top-left-radius: ${(props) => props.borderRadius || '5px'};
  border-top-right-radius: ${(props) => props.borderRadius || '5px'};
  font-size: 16px;
  color: #818181;
  margin-left: 5px;

  &:hover {
    background-color: #eeee;
  }
  ${({ readOnly }) =>
    readOnly &&
    `background-color: #f5f5f5;
    color: #999;
  `}
`;

export const ContainerComboboxList = styled.ul<ComboboxListProps>`
  position: absolute;
  top: 0px;
  background: #ffffff;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  box-shadow: 5px 5px 5px 0px rgba(0, 0.3, 0, 0.3);
  border-radius: 5px;

  max-height: 189px;
  overflow: auto;

  padding: 0;
  margin: 60px 0 0;
  list-style-type: none;
`;
export const ContainerComboboxItem = styled.li`
  list-style: none;
  width: auto;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  cursor: pointer;
  padding: 9px 15px;
  height: 30px;
  color: #4c4c4c;
  font-size: 15px;
  font-weight: 400;
`;

export const ContainerCustomSelect = styled.div`
  position: relative;
  user-select: none;
  width: 80%;

  .custom-select {
    padding-right: 8px;
    background: ${(props) => props.theme.white};
    position: relative;
    cursor: pointer;
    color: ${(props) => props.theme.grey3};
  }
  .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.white};
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
    padding: 8px;
    max-height: 200px;
    overflow-y: auto;
  }
  .custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
      -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 8px;
  }
`;
