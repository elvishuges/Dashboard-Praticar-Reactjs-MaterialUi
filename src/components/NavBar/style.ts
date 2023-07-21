import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #222222;
  color: #f0f0f0;
  .button-logout {
    width: 100px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 16px;
`;

export const LogoutButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
