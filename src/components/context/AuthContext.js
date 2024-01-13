import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginValid, setIsLoginValid] = useState(false);

  const setLoginValid = (value) => {
    setIsLoginValid(value);
  };

  const resetLoginValid = () => {
    setIsLoginValid(false);
  };

  const value = {
    isLoginValid,
    setLoginValid,
    resetLoginValid,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};