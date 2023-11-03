import { SubjectDTO } from './SubjectDTO';
import { UserData } from './UserDTO';

export type SectionDTO = {
  id: string;
  description: string;
  subjects: SubjectDTO[];
};
