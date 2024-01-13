// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginValid, setIsLoginValid] = useState(false);

  const setLoginValid = (value) => {
    setIsLoginValid(value);
  };

  return (
    <AuthContext.Provider value={{ isLoginValid, setLoginValid }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};