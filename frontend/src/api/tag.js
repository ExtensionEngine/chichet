import { extractData } from './helpers';
import request from './request';

const urls = {
  root: '/tags',
};

const fetchAll = () => {
  return request.get(urls.root).then(extractData);
};

export default {
  fetchAll,
};
