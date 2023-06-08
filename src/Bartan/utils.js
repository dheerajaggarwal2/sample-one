export const getDiscountPercentage = (actualPrice, discountPrice) => {
  const percent = parseInt(((actualPrice - discountPrice) / actualPrice) * 100, 10);
  return `${percent}% off`
}
