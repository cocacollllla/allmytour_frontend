import axios from 'axios';

const Instance = axios.create({
  baseURL: 'http://49.50.174.75:8000',
  timeout: 10000,
});

Instance.interceptors.request.use(
  config => {
    if (localStorage.getItem('token') != null) {
      config.headers['Authorization'] = localStorage.getItem('token');
    } else if (sessionStorage.getItem('token') != null) {
      config.headers['Authorization'] = sessionStorage.getItem('token');
    }

    return config;
  },
  err => Promise.reject(err)
);

export default Instance;
