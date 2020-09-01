import axios from 'axios';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFiNDIxNzY3Zjg0ODJmNmNjMmVkZCIsImlhdCI6MTU5ODkxOTcwNiwiZXhwIjoxNTk5MDA2MTA2fQ._D5zmHc44eyDjzAaJO98kNLY1jZpGRUJGurWB2HAVZA';

export default axios.create({
  baseURL: 'http://localhost:3334',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
