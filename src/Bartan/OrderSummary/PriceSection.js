import React from "react";
import "./PriceSection.css"

const PriceSection = (props) => {
  const { cartItemList = []} = props;

  const getFieldValues = () => {
    const obj = {};
    cartItemList.forEach((item) => {
      obj.actualPrice = (obj.actualPrice || 0) + (item?.actualPrice * (item.quantity || 1));
      obj.discountPrice = (obj.discountPrice || 0) + (item?.discountPrice * (item.quantity || 1));
      obj.count = (obj.count || 0) + 1
    })
    obj.discount = (obj.actualPrice - obj.discountPrice);
    return obj;
  }
  return (
    <div className="priceSectionContainer">
      <div className="headingPrice">Price Details</div>
      <div>
        <div className="rowContainer">
          <div className="leftText">Price ({getFieldValues().count} Items)</div>
          <div className="rightText"><span>&#8377;</span>{getFieldValues().actualPrice}</div>
        </div>

        <div className="rowContainer">
          <div className="leftText">Discount</div>
          <div className="rightText">-<span>&#8377;</span>{getFieldValues().discount}</div>
        </div>

        <div className="rowContainer">
          <div className="leftText">Delivery</div>
          <div className="rightText"><b>Free</b></div>
        </div>

        <div className="rowContainer amountClass">
          <div className="leftText"><b>Total Amount</b></div>
          <div className="rightText"><span>&#8377;</span>{getFieldValues().discountPrice}</div>
        </div>
        <div className="rowContainer finalText">
          You will save <span>&nbsp;&#8377;</span>{getFieldValues().discount} from the order
        </div>
      </div>
    </div>
  )
};

export default PriceSection;