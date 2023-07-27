import api from '../services/api';

export async function createRoom(
  topic: string,
  description: string,
  meetLink: string,
  date: string
): Promise<any> {
  const response = await api.post<any>('/room', {
    topic,
    description,
    meetLink,
    date,
  });
  return response.data;
}
export async function getAllRoom(): Promise<any> {
  const response = await api.get<any>('/room');
  return response.data;
}
