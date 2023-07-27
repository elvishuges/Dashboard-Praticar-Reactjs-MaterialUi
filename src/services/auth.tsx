import api from '../services/api';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  id: number;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
  tokenType: string;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const data: LoginData = {
    email: email,
    password: password,
  };

  const response = await api.post<LoginResponse>('/signin', {
    email,
    password,
  });
  return response.data;
}
