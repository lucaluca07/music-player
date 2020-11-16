const throttle = <T>(fn: Function, wait: number) => {
  let callback = fn;
  let timerId: number | null = null;

  // 是否是第一次执行
  let firstInvoke = true;

  const throttled = (args: T) => {
    // 如果是第一次触发，直接执行
    if (firstInvoke) {
      callback(args);
      firstInvoke = false;
      return;
    }

    // 如果定时器已存在，直接返回。
    if (timerId) {
      return;
    }

    timerId = window.setTimeout(() => {
      // 注意这里 将 clearTimeout 放到 内部来执行了
      window.clearTimeout(timerId as number);
      timerId = null;

      callback(args);
    }, wait);
  };

  // 返回一个闭包
  return throttled;
};

export default throttle;
