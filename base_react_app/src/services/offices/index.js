import buildApi from '../api';

import { URLS } from './config';

// const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get } = buildApi();
  const urlBase = 'http://localhost:3010/offices';

  setBaseURL(urlBase);
  const offices = {
    getOffices: (id, config = {}) =>
      get(`${URLS.offices.getOffices}`, {}, config)
  };

  return { offices };
};

export default createApi;
