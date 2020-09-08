import axios from 'axios';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTFhY2U1NDZiYjI1OTVlYjdkN2YzOSIsImlhdCI6MTU5OTUyOTIyNCwiZXhwIjoxNTk5NjE1NjI0fQ.im5qvtbUFADZ8GAtKb25KlgOh1y2u22g4OERexGMY-U';

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
