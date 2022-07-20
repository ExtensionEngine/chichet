import { extractData } from './helpers';
import request from './config';

const urls = {
  root: '/api/tags',
};

const fetchAll = () => {
  return request.get(urls.root).then(extractData);
};

export default {
  fetchAll,
};
