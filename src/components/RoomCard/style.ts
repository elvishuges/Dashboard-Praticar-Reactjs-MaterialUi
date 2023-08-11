import styled from 'styled-components';

type ChatBubbleWrapperProps = {
  sender?: boolean;
};
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  width: auto;
  margin-top: 10px;
  background-color: #f2f2f2;
  color: #f0f0f0;
`;
export const TopicChip = styled.div`
  max-width: 250px;
  font-size: 20dp;
  white-space: nowrap;
  overflow: hidden; /* "overflow" value must be different from "visible" */
  text-overflow: ellipsis;
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
    margin: 10px 10px 0 10px;
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
  .meet-infos {
    font-size: 12px;
    padding-bottom: 5px;
  }
  .user-name {
    text-transform: uppercase;
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
  max-width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Action = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ec585d;
  border-top: 1px solid;
  cursor: pointer;
  .content {
    font-size: 23px;
    font-weight: 300;
    margin: 10px;
  }
`;
