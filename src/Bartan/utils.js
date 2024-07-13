export const getDiscountPercentage = (actualPrice, discountPrice) => {
  const percent = parseInt(((actualPrice - discountPrice) / actualPrice) * 100, 10);
  return `${percent}% off`;
}

export const getFromLocalStorage = (key) => {
  try {
    const data = JSON.parse(window.localStorage.getItem(key)) || "";
    return data;
  } catch(e) {
    console.log("error getting data from slocal storage", e);
  }
}

export const setInLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}
