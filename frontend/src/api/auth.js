import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/users',
  get signIn() {
    return this.root + '/sign-in';
  },
  get register() {
    return this.root + '/register';
  },
};

const signIn = credentials => {
  return request.post(urls.signIn, credentials).then(extractData);
};

const register = user => {
  return request.post(urls.register, user).then(extractData);
};

export default {
  signIn,
  register,
};
