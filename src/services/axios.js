import axios from 'axios';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFhY2U1NDZiYjI1OTVlYjdkN2YzOSIsImlhdCI6MTU5OTYxOTMzMiwiZXhwIjoxNTk5NzA1NzMyfQ.rG5FpWnoIoE_owlVWvxYFvEUcuOR9rXpNhF_b6LZP0U';

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
