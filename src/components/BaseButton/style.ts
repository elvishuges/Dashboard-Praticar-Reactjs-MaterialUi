import styled from "styled-components";

interface BaseButtonContainerProps {
  color?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
}

export const BaseButtonContainer = styled.button<BaseButtonContainerProps>`
  background-color: ${(props) => props.color || "#4caf50"};
  border: 8px;
  border-radius: ${(props) => props.borderRadius || "5px"};
  color: white;
  padding: ${(props) => props.padding || "14px"};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.fontSize || "16px"};
  width: 100%;
  cursor: pointer;
`;
