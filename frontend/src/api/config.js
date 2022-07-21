import axios from 'axios';

const config = {
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(config);

export default client;
