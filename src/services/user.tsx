import api from '../services/api';
import { SectionDTO } from '../types/dto/SectionDTO';

export async function getAllSection(): Promise<any> {
  const response = await api.get<any>('/sections');
  return response;
}

export async function getSubjectById(id: string): Promise<any> {
  const response = await api.get<any>(`/subject/${id}`);
  return response;
}
export async function getAllSectionDescription(): Promise<any> {
  const response = await api.get<any>(`/sections/descriptions`);
  return response;
}
export async function createSubject(payload: any): Promise<any> {
  const response = await api.post<any>(`/subject`, payload);
  return response;
}
