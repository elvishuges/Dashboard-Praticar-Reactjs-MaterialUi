import api from '../services/api';

export async function createSection(payload: any): Promise<any> {
  const response = await api.post<any>(`/section`, payload);
  return response;
}
export async function getMySections(): Promise<any> {
  const response = await api.get<any>('/user/sections');
  return response;
}

export async function getAllSectionDescription(): Promise<any> {
  const response = await api.get<any>(`/sections/descriptions`);
  return response;
}

export async function getMySectionsDescription(): Promise<any> {
  const response = await api.get<any>(`/sections/user/descriptions`);
  return response;
}

export async function getSubjectById(id: string): Promise<any> {
  const response = await api.get<any>(`/subject/${id}`);
  return response;
}
export async function createSubject(payload: any): Promise<any> {
  const response = await api.post<any>(`/subject`, payload);
  return response;
}
