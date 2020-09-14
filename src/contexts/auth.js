import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from '../services/axios';
import * as User from '../services/user';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      console.log('oi1');
      const storagedUser = localStorage.getItem('user');
      const storagedToken = localStorage.getItem('token');
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        axios.defaults.headers['Authorization'] = `Baerer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function login(email, password) {
    const response = await User.login(email, password);
    console.log(response);
    if (response) {
      const { user, token } = response.data;

      setUser(user);
      axios.defaults.headers.Authorization = `Baerer ${token}`;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  async function logout() {
    console.log('logout');
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    console.log('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
