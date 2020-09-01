import axios from './axios';
export const getAll = () => {
  return axios.get('/').then(({ data }) => data);
};
