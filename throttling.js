// Throttling is a technique that limits how often a function can be called. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

const Throttle = (func, limit) => {
  let flag = true;

  return function (...args) {
    const context = this;

    if (flag) {
      func.apply(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
