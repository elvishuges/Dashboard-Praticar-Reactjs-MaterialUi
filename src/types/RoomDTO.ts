import { TopicData } from './TopicDTO';
import { UserData } from './UserDTO';

export type RoomData = {
  idRoom: string;
  date: string;
  description: string;
  meetLink: string;
  topic?: TopicData;
  user?: UserData;
};
