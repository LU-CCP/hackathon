import buildApi from '../api';

import { URLS } from './config';

// const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get, post, put, delete: del } = buildApi();
  const urlBase = 'http://localhost:3010/event/';

  setBaseURL(urlBase);
  const events = {
    getEvents: (id, config = {}) => get(`${URLS.events.getEvents}`, {}, config),
    postEvent: (data, config = {}) =>
      post(`${URLS.events.postEvent}`, data, config),
    putEvent: (data, id, config = {}) =>
      put(`${URLS.events.putEvent}/${id}`, data, config),
    delEvent: (id, config = {}) =>
      del(`${URLS.events.delEvent}/${id}`, {}, config)
  };

  return { events };
};

export default createApi;
