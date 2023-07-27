import styled, { keyframes } from 'styled-components';

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;
interface BaseButtonContainerProps {
  color?: string;
  background?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
}

export const BaseButtonContainer = styled.button<BaseButtonContainerProps>`
  background-color: ${(props) => props.background || '#EE5684'};
  border: 8px;
  border-radius: ${(props) => props.borderRadius || '5px'};
  color: ${(props) => props.color || '#F2F2F2'};
  padding: ${(props) => props.padding || '14px'};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.fontSize || '16px'};
  width: 100%;
  cursor: pointer;
  &:hover {
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
