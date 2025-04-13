import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

export const backend = {
  name: 'fisher',
  auth,
  data,
};
