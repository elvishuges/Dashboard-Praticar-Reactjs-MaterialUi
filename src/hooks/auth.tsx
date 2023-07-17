import { createContext, ReactNode, useContext, useState } from 'react';
import * as auth from '../services/auth';
import { json } from 'stream/consumers';

type AuthTypeProps = {
  isLogged: boolean;
  login(email: string, password: string): void;
  logout(): void;
};

type AuthProviderChildren = {
  children: ReactNode;
};

const AuthContext = createContext<AuthTypeProps>({} as AuthTypeProps);

export const AuthProvider = ({ children }: AuthProviderChildren) => {
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    const loginValid = localStorage.getItem('@change-my-mind:logged');
    return !!loginValid;
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await auth.login(email, password);
      localStorage.setItem('@change-my-mind:user', JSON.stringify(response));
      localStorage.setItem('@change-my-mind:logged', 'true');
      setIsLogged(true);
    } catch (error) {
      throw new Error('erro');
    }
  };

  const logout = () => {
    localStorage.removeItem('@change-my-mind:user');
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
