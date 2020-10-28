/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
  get(key: string) {
    try {
      return JSON.parse(window.localStorage.getItem(key) || '');
    } catch (err) {
      console.warn('解析localStorage里面内容出错');
      return window.localStorage.getItem(key);
    }
  },
  set(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  },
};
