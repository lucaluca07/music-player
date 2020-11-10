// import store from "@/utils/store";
import axios, { AxiosRequestConfig } from "axios";
import qs from 'query-string'
// 创建一个独立的axios实例
const ajax = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  baseURL: process.env.REACT_APP_BASE_URL,
  // 配置请求超时时间
  timeout: 5 * 1000,
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'comma' });
  },
});
// 请求拦截
ajax.interceptors.request.use((config) => {
  // 自定义header，可添加项目token
  // config.headers.token = store.get("token") || '123';
  return config;
});
// 返回拦截
ajax.interceptors.response.use(
  (response) => {
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if (response.status === 200) {
      return response;
    } else if (response.status === 301) {
      // 10000假设是未登录状态码
      // 也可使用router进行跳转
      // window.location.href = "/#/login";
      return response;
    } else {
      // 错误显示可在service中控制，因为某些场景我们不想要展示错误
      // Message.error(res.message);
      return response;
    }
  },
  () => {
    // Message.error('网络请求异常，请稍后重试!');
  }
);

/**
 * 核心函数，可通过它处理一切请求数据，并做横向扩展
 * @param config axios 配置
 * @param loading 是否显示loading
 * @param mock 本次是否请求mock而非线上
 * @param error 本次是否显示错误
 */
function request<T>(
  config: AxiosRequestConfig,
  options?: { loading?: boolean; mock?: boolean; error?: boolean }
): Promise<T> {
  return new Promise((resolve, reject) => {
    if (config.method === "get") {
      config.params = config.data;
    }
    console.log(config.params);
    ajax({ method: "get", ...config })
      .then((response) => {
        const res = response.data;
        // 处理返回函数
        if (res.code === 200) {
          resolve(res);
        } else {
          // 通过配置可关闭错误提示
          if (options?.error) {
            // Message.error(res.message);
          }
          reject(res);
        }
      })
      .catch((error) => {
        // Message.error(error.message);
      })
      .finally(() => {
        // loadingInstance.close();
      });
  });
}

export default request;
