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

import { RoomData } from '../../types/RoomDTO';

type Props = {
  room: RoomData;
};

const RoomCard: React.FC<Props> = ({ room }) => {
  const handleLogout = () => {
    // Lógica para realizar o logout
  };

  return (
    <Container>
      <Text>
        <div className='infos'>
          {room.topic ? <TopicChip>{room.topic.description}</TopicChip> : '--'}
        </div>

        <TextContent>
          <div className='meet-infos'>
            Criador:
            <span className='user-name'>
              {room.user ? ' ' + room.user.username : ' ---'}
            </span>
            <br />
            Status:Ativo <br />
            Link Meet: {room.meetLink} <br />
            Data: {room.date}
          </div>
          <ChatBubbleWrapper>
            <ChatBubble>{room.description}</ChatBubble>
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
