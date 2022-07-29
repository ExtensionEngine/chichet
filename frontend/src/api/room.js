import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/rooms',
};

const getAll = () => {
  return request.get(urls.root).then(extractData);
};

export default {
  getAll,
};
