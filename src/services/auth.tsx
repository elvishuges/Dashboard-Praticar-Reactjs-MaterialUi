import api from '../services/api';

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  id: number;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
  tokenType: string;
};

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export async function login({ email, password }: LoginPayload): Promise<any> {
  const response = await api.post<LoginResponse>('/signin', {
    email,
    password,
  });

  return response;
}

type payloadType = { email: string; password: string };
export async function register({
  username,
  email,
  password,
}: RegisterPayload): Promise<any> {
  const response = await api.post<any>('/signup', {
    username,
    email,
    password,
  });
  return response;
}
