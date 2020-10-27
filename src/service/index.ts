import request from './request';
import api from './api/common';

const services: { [key: string]: Function } = {};
api.forEach((item) => {
  const { name, url, success, faild, options, method } = item;
  services[name] = (params: any) =>
    request(url, params, options as any, 'get')
      .then((res) => success())
      .catch((error) => faild());
});

export default init;
