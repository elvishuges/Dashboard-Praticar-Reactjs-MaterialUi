import api from '../services/api';

export async function createRoom(
  userId: string,
  topicId: string,
  description: string,
  meetLink: string,
  date: string
): Promise<any> {
  const response = await api.post<any>('/room', {
    userId,
    topicId,
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
export async function getRoomById(id: string): Promise<any> {
  const response = await api.get<any>(`/room/${id}`);
  return response.data;
}
export async function getAllTopic(): Promise<any> {
  const response = await api.get<any>('/topic');
  return response.data;
}
