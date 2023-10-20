import api from '../services/api';

export async function getAllSection(): Promise<any> {
  const response = await api.get<any>('/sections');
  return response.data;
}
