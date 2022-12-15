import axios, {AxiosRequestConfig} from 'axios';
import {baseURL} from './api-constant';

const instance = axios.create();

function onUseToken(config: AxiosRequestConfig) {
  const blackList = ['login', 'register'];

  return (
    blackList.filter(endpoint => config.url?.indexOf(endpoint)).length === 0
  );
}

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.baseURL = baseURL;
    //Handle logic get token and assign it to Bearer token

    return config;
  },
  error => {
    //Handle logic after call error

    return Promise.reject(error);
  },
  {
    synchronous: true,
    runWhen: onUseToken,
  },
);

export default {
  request: instance,
};
