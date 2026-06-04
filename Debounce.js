// Debouceing is a technique that delays the execution of the function until the certain amount of time has passed since the last time it was triggered. It is used to limit the number of times a function is called, especially in cases where the function is called frequently, such as in search input or window resize events.

const Debounce = (func, delay) => {
  let Timer;
  return function (...args) {
    const context = this;
    clearTimeout(Timer);

    Timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
