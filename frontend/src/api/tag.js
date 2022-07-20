import { extractData } from './helpers';
import request from './config';

const urls = {
  root: '/tags',
};

function fetch() {
  return request.get(urls.root).then(extractData);
}

export default {
  fetch,
};
