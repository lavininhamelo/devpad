import axios from './axios';
export const getAll = () => {
  return axios.get('/tag').then(({ data }) => data);
};
