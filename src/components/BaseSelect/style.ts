import { styled } from 'styled-components';

interface ContainerProps {
  borderRadius?: string;
  active?: string;
}
interface ContainerInputProps {
  borderRadius?: string;
  active?: string;
}
interface OptionListProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding-bottom: 15px;
  position: relative;
  .html-select {
    display: none;
  }
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
  color: palevioletred;
  background-color: #f5f5f5;
  border: 0;
  outline: none;
  height: 35px;
  padding-top: 15px;
  font-size: 16px;
  color: #818181;

  &:hover {
    background-color: #eeee;
    border-bottom: 2px solid;
  }
  &.error {
    border-bottom-color: red !important;
  }
`;

export const OptionList = styled.div<OptionListProps>`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  display: ${(props) => (props.open ? 'block' : 'none')};
  background: white;
  transition: all 0.5s;
  z-index: 100;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer !important;

  .custom-option {
    position: relative;
    display: block;
    padding: 5px 8px;
    transition: all 0.5s;
    height: 40px;
    &:hover {
      background-color: #e4e4e4;
    }
  }
`;

type OptionItemProps = {
  selected: boolean;
};

export const OptionItem = styled.option<OptionItemProps>`
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#ccc' : 'transparent')};

  &:hover {
    background-color: #ccc;
  }
`;
