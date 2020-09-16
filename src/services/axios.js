import axios from 'axios';

axios.defaults.headers['Authorization'] = null;

export default axios.create({
  baseURL: 'https://devpadproject.herokuapp.com/',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
