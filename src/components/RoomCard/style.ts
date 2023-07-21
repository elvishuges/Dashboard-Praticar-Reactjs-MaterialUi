import styled from 'styled-components';

type ChatBubbleWrapperProps = {
  sender?: boolean;
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  height: 200px;
  width: auto;
  background-color: #f2f2f2;
  color: #f0f0f0;
`;
export const TopicChip = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: 20px;
  width: 100%;
  padding: 3px;
  font-size: 14px;
  background-color: #232c33 !important;
  color: #dadff7 !important;
`;
export const Date = styled.div`
  font-size: 10px;
`;

export const Text = styled.div`
  margin: 0;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .infos {
    margin: 10px;
    font-weight: 600;
    color: #222222;
    font-size: 12px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #222222;
  padding: 8px;
  .user-infos {
    font-size: 12px;
  }
`;

export const ChatBubbleWrapper = styled.div<ChatBubbleWrapperProps>`
  display: flex;
  justify-content: ${(props) => (props.sender ? 'flex-end' : 'flex-start')};
  margin-bottom: 10px;
  font-size: 12px;
  color: #222222;
`;

export const ChatBubble = styled.div<ChatBubbleWrapperProps>`
  background-color: ${(props) => (props.sender ? '#DCF8C6' : '#FFF')};
  color: ${(props) => (props.sender ? '#000' : '#333')};
  border-radius: ${(props) =>
    props.sender ? '15px 0 15px 15px' : '0 15px 15px 15px'};
  padding: 10px 15px;
  max-width: 70%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Action = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  font-weight: 100;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ec585d;
  border-top: 1px solid;
  cursor: pointer;
  .content {
    font-size: 23px;
    font-weight: 600;
    margin: 10px;
  }
`;
