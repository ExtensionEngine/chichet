import { extractData } from './helpers';
import request from './config';

const urls = {
  root: '/users',
  get signIn() {
    return urls.root + '/sign-in';
  },
  get register() {
    return urls.root + '/register';
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
