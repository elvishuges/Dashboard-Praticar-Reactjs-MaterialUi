import { createContext, ReactNode, useContext, useState } from 'react';
import * as auth from '../services/auth';
import { json } from 'stream/consumers';

import LocalStorageService from './../services/localstorage';

type AuthTypeProps = {
  isLogged: boolean;
  logout(): void;
  login(payload: any): void;
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

  const logout = () => {
    LocalStorageService.removeItem('@change-my-mind:user');
    LocalStorageService.removeItem('@change-my-mind:logged');
    setIsLogged(false);
  };

  const login = (payload: any) => {
    LocalStorageService.setItem('@change-my-mind:user', payload);
    LocalStorageService.setItem('@change-my-mind:logged', 'true');
    setIsLogged(true);
  };

  return (
    <AuthContext.Provider value={{ isLogged, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
