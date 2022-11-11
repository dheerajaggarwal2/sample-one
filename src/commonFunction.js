export const debounce = function(fn, timer) {
  let d;
  return function(param1) {
    clearTimeout(d);
    d = setTimeout(() => {
      fn(param1);
      d = null;
    }, timer)
  } 
};