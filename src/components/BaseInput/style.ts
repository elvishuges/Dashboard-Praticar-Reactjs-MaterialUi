import styled from 'styled-components';

interface ContainerProps {
  active?: boolean;
}
interface ContainerInputProps {
  borderRadius?: string;
  active?: string;
}
interface InputProps {
  borderRadius?: string;
  readOnly?: boolean;
}

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

export const ContainerInput = styled.div<ContainerInputProps>`
  font-family: 'Arial';
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-color: #f5f5f5;
  border-bottom-color: #a5a5a5;
  border-top-left-radius: ${(props) => props.borderRadius || '5px'};
  border-top-right-radius: ${(props) => props.borderRadius || '5px'};
  &:hover {
    background-color: #eeee;
    border-bottom: 2px solid;
  }
  &.error {
    border-bottom-color: red !important;
  }
  label {
    margin-left: 5px;
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

export const Input = styled.input<InputProps>`
  color: palevioletred;
  background-color: #f5f5f5;
  border: 0;
  outline: none;
  width: 100%;
  height: 35px;
  padding-top: 15px;
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
