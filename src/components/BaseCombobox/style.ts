import styled from 'styled-components';

interface StyledContainerProps {
  borderRadius?: string;
  active?: string;
}

interface StyledBaseComboboxProps {
  borderRadius?: string;
  readOnly?: boolean;
}

interface StyledBaseComboboxInputProps {
  borderRadius?: string;
  readOnly?: boolean;
}

interface StyledBaseComboboxListProps {}

export const Container = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  .error-message {
    color: red;
    font-size: 0.8rem !important;
  }
`;
export const ContainerBaseCombobox = styled.div<StyledBaseComboboxProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-left: 8px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: grey;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 25px) scale(1);
    transform-origin: left top;
    transition: all 0.2s ease-out;

    &.active {
      transform: translate(0, 5px) scale(0.75);
    }
  }
`;
export const ContainerBaseComboboxInput = styled.input<StyledBaseComboboxInputProps>`
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

export const ContainerComboboxList = styled.ul<StyledBaseComboboxListProps>`
  position: absolute;
  padding-top: 30px;
  background: #ffffff;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
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
