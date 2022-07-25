import axios from 'axios';

const config = {
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(config);

export default client;
