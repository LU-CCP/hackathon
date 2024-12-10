import { create } from 'apisauce';

import apiConfig from './config';

const onRequestSuccess = config => config;

const onResponseError = error => Promise.reject(error);

const buildApi = (config = apiConfig) => {
  const api = create(config);

  api.axiosInstance.interceptors.request.use(onRequestSuccess);
  api.axiosInstance.interceptors.response.use(res => res, onResponseError);

  return api;
};

export default buildApi;
