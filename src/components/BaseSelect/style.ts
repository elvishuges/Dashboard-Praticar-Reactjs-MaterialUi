import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80px;
  .html-select {
    display: block;
  }
  .error-message {
    color: red;
    font-size: 0.8rem !important;
  }
`;

export const ContainerCustomSelect = styled.div`
  position: relative;
  user-select: none;
  width: 80%;
`;
export const ContainerSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  outline: none;
`;

export const OptionList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
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
