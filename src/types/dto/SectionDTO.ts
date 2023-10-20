import { SubjectDTO } from './SubjectDTO';
import { UserData } from './UserDTO';

export type SectionDTO = {
  id: String;
  description: String;
  subjects: SubjectDTO;
};
