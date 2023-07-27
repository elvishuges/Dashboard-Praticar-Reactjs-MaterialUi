import axios from 'axios';
interface User {
  token: string;
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Function to get the token from localStorage
const getTokenFromLocalStorage = (): string | null => {
  const userString = localStorage.getItem('@change-my-mind:user');
  if (userString) {
    const user: User = JSON.parse(userString);
    return user.token;
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
