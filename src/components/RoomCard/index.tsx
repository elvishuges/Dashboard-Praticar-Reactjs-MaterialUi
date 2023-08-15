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
import { formatDate } from '../../utils/functions';

type Props = {
  room: RoomData;
};

const RoomCard: React.FC<Props> = ({ room }) => {
  const date: Date = formatDate(room.date) as Date;

  return (
    <Container>
      <Text>
        <div className='infos'>
          {room.topic ? <TopicChip>{room.topic.description}</TopicChip> : '--'}
        </div>

        <TextContent>
          <div className='meet-infos'>
            <strong>Criador:</strong>
            <span className='user-name'>
              {room.user ? ' ' + room.user.username : ' ---'}
            </span>
            <br />
            <strong> Status:</strong>Ativo <br />
            <strong>Link Meet:</strong> {room.meetLink} <br />
            <strong> Data: </strong>
            {date.toLocaleString()}
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
