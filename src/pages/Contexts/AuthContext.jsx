import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pcem, setPcem] = useState(0);

  const aument = (novo) => {
    setPcem(novo);
  };

  const login = (token) => {
    setUser(token);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, pcem, aument }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
