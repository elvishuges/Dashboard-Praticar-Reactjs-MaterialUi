import { createContext, ReactNode, useContext, useState } from 'react';
import * as auth from '../services/auth';
import { json } from 'stream/consumers';

import LocalStorageService from './../services/localstorage';

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
    const storedUser = LocalStorageService.getItem('@change-my-mind:user');
    return !!storedUser;
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await auth.login(email, password);
      LocalStorageService.setItem('@change-my-mind:user', response);
      LocalStorageService.setItem('@change-my-mind:logged', 'true');
      setIsLogged(true);
    } catch (error) {
      throw new Error('erro');
    }
  };

  const logout = () => {
    LocalStorageService.removeItem('@change-my-mind:user');
    LocalStorageService.removeItem('@change-my-mind:logged');
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
