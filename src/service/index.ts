import request from "./request";
import api from "./api/common";
import { AxiosRequestConfig } from "axios";

const services: { [key: string]: Function } = {};
api.forEach((item) => {
  const { name, config, success, faild, options } = item;
  services[name] = (params: AxiosRequestConfig = {}) =>
    request({ ...config, ...params }, options)
      .then((res) => success?.())
      .catch((error) => faild?.());
});

export default init;
