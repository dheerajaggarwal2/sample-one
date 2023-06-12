import React from "react";
import "./CheckoutButton.css"

const CheckoutButton = (props) => {
  const { cartItemList = [] } = props;
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    let price = 0;
    cartItemList.forEach((item) => {
      price = price + (item?.discountPrice * (item?.quantity || 1));
    })
    setTotalPrice(price);
  }, [cartItemList])
  if (!cartItemList.length) return null;
  return (
    <div className="checkoutContainer" >
      <div className="checkoutHeading">
        <div className="priceStyle">
          <div className="priceText">Total Price</div>
          <span>&#8377;</span><b>{totalPrice}</b>
        </div>
        <div className="placeOrderContainer">
          <button
            type="button"
            className="placeOrderButton"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutButton;