import { useNavigate } from 'react-router-dom';
import BaseButton from '../BaseButton';
import {
  Action,
  ChatBubble,
  ChatBubbleWrapper,
  Container,
  Date,
  Text,
  TextContent,
  TopicChip,
} from './style';

const RoomCard = () => {
  const handleLogout = () => {
    // Lógica para realizar o logout
  };

  return (
    <Container>
      <Text>
        <div className='infos'>
          <TopicChip>Programação</TopicChip>
        </div>

        <TextContent>
          <div className='user-infos'>
            Usuario: Elvis Huges <br /> Status:Ativo
          </div>
          <ChatBubbleWrapper>
            <ChatBubble>Olá! Como você está?</ChatBubble>
          </ChatBubbleWrapper>
        </TextContent>
      </Text>

      <Action>
        <div className='content'> Change My Mind</div>
      </Action>
    </Container>
  );
};

export default RoomCard;
