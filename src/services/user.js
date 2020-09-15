import axios from './axios';

export const user = () => {
  return axios
    .get('/user')
    .then((response) => response.data)
    .catch((er) => er.response.data);
};

export const login = (email, password) => {
  const data = { password, email };
  return axios
    .post('/login', data)
    .then((data) => data)
    .catch((er) => er.response.data);
};

export const register = (email, username, password) => {
  const data = { password, email, username };
  return axios
    .post('/register', data)
    .then((data) => data)
    .catch((er) => er.response.data);
};
