import axios from './axios';

export const list = () => {
  return axios.get('/notes').then((response) => response.data);
};

export const show = (id) => {
  return axios.get('/notes/' + id).then((response) => response.data);
};

export const create = ({ title, tags, isRedirect, url, content }) => {
  const note = { title, tags, isRedirect, url, content };
  return axios.post('/note', note).then((data) => data);
};

export const update = (id, newData) => {
  return axios.put('/note/' + id, newData).then((data) => data);
};

export const remove = (id) => {
  return axios.delete('/notes/' + id).then((response) => response.data);
};
