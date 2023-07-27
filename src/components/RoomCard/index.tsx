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

type Props = {
  date: string;
  description: string;
  meetLink: string;
};

const RoomCard: React.FC<Props> = ({ date, description, meetLink }) => {
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
          <div className='meet-infos'>
            Criador: Elvis Huges <br />
            Status:Ativo <br />
            Link Meet: {meetLink} <br />
            Data: {date}
          </div>
          <ChatBubbleWrapper>
            <ChatBubble>{description}</ChatBubble>
          </ChatBubbleWrapper>
        </TextContent>
      </Text>

      <Action>
        <div className='content'> Change My Mind...</div>
      </Action>
    </Container>
  );
};

export default RoomCard;
