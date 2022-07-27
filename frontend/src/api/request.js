import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { useAuthStore } from '@/store/authStore';

const { FORBIDDEN } = StatusCodes;

const config = {
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
};

const client = axios.create(config);

const isAuthError = err => [FORBIDDEN].includes(err.response.status);

client.interceptors.response.use(
  res => res,
  err => {
    if (isAuthError(err)) {
      useAuthStore().removeUser();
      return window.location.reload();
    }

    throw err;
  },
);

export default client;
