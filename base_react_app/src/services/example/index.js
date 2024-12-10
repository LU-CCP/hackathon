import buildApi from '../api';

import { URLS } from './config';

const { REACT_APP_URL_EXAMPLE_API } = process.env;

const createApi = () => {
  const { setBaseURL, get } = buildApi();

  setBaseURL(REACT_APP_URL_EXAMPLE_API);

  const todos = {
    getTodo: (id, config = {}) => get(`${URLS.todos.getTodo}${id}`, {}, config)
  };

  return { todos };
};

export default createApi;
