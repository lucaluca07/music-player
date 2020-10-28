import store from "@/utils/store";
import axios, { AxiosRequestConfig } from "axios";

/**
 * 生成基础axios对象，并对请求和响应做处理
 * 前后端约定接口返回解构规范
 * {
 *    code:0,
 *    data:"成功",
 *    message:""
 * }
 */

// 创建一个独立的axios实例
const ajax = axios.create({
  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  baseURL: "/api",
  // 定义统一的请求头部
  // headers: {
  //   token: store.get('token'),
  // },
  // 配置请求超时时间
  timeout: 10000,
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  withCredentials: true,
});
// 请求拦截
ajax.interceptors.request.use((config) => {
  // 自定义header，可添加项目token
  config.headers.token = store.get("token");
  return config;
});
// 返回拦截
ajax.interceptors.response.use(
  (response) => {
    // 获取接口返回结果
    const res = response.data;
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if (res.code === 0) {
      return res;
    } else if (res.code === 10000) {
      // 10000假设是未登录状态码
      // 也可使用router进行跳转
      window.location.href = "/#/login";
      return res;
    } else {
      // 错误显示可在service中控制，因为某些场景我们不想要展示错误
      // Message.error(res.message);
      return res;
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
function request(
  config: AxiosRequestConfig,
  options?: { loading?: boolean; mock?: boolean; error?: boolean }
) {
  return new Promise((resolve, reject) => {
    if (config.method === "get") {
      config.params = config.data;
    }

    ajax({ ...config })
      .then((res) => {
        // 处理返回函数
        if (res.status === 0) {
          resolve(res.data);
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
