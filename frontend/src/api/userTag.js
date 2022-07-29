import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/user-tags',
};

const add = params => {
  return request.post(urls.root, params).then(extractData);
};

export default {
  add,
};
