import localforage from "localforage";

export function debounce(fn, timer) {
  let d = null;
  return function show(param1) {
    clearTimeout(d);
    d = setTimeout(() => {
      fn(param1);
      d = null;
    }, timer)
  } 
};

export const setDataInLF = (key, data) => {
  localforage.setItem(key, data);
};

export const gettDataInLF = (key) => {
  localforage.getItem(key).then((value) => {
    console.log(value);
  });
};