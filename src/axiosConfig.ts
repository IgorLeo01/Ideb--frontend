import axios from 'axios';

const instance = axios.create({
  baseURL: "http://3.135.206.215:8080",
  timeout: 10000,
});

export default instance;
