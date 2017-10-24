import groups from './groups.json';

const mockApi = {
  get() {
    return Promise.resolve(groups);
  },
  post() {
    return Promise.resolve();
  },
};
export default mockApi;
