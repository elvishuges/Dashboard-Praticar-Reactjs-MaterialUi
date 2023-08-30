import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f7f7f7;

  .heading {
    margin-top: 22px;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
  }

  .form-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
  }

  .input-field {
    width: 100%;
    margin: 8px 0;
  }

  .submit {
    background-color: #081229;
  }

  .normal-text {
    margin-top: 40px;
    opacity: 70%;
    max-width: 80%;
  }

  .error_message {
    color: red;
  }
`;
