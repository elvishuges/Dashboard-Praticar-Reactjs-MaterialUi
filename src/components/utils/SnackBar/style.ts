import React from 'react';
import styled from 'styled-components';

export const SnackBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 20px 20px;
  margin: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  .message {
    font-weight: bold;
  }

  .close-action {
    color: #e91e63;
    cursor: pointer;
    padding-left: 10px;
  }
`;
