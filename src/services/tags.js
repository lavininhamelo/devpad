import axios from './axios';
export const getAll = () => {
  return axios.get('/tag').then((response) => response.data);
};
export const addTag = ({ name, color }) => {
  return axios.post('/tag', { name, color }).then((data) => data);
};
