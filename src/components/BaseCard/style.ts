import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 414px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  background-color: #f7fcf8;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  .title {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 5px;
  }
`;
