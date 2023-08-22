import axios from 'axios';
import LocalStorageService from './localstorage';
interface User {
  accessToken: string;
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the token from localStorage
const getTokenFromLocalStorage = (): string | null => {
  const userString = LocalStorageService.getItem('@change-my-mind:user');

  if (userString) {
    const user: User = userString;
    return user.accessToken;
  }
  return null;
};

// Add an interceptor to attach the authorization header to each request
api.interceptors.request.use((config) => {
  const accessToken = getTokenFromLocalStorage();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
