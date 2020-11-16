const debounce = <T>(fn: Function, wait: number) => {
  let callback = fn;
  let timerId: number | null = null;

  const debounced = (args: T) => {
    window.clearTimeout(timerId as number);
    timerId = window.setTimeout(function () {
      callback(args);
    }, wait);
  };

  // 返回一个闭包
  return debounced;
};

export default debounce;
