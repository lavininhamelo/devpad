import axios from 'axios';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFiNDIxNzY3Zjg0ODJmNmNjMmVkZCIsImlhdCI6MTU5OTg3MjI3NSwiZXhwIjoxNTk5OTU4Njc1fQ.3fgH8QnlnqyTPVTZmp4USRh78jeBrtcJCs9Y9kqjZOw';

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
