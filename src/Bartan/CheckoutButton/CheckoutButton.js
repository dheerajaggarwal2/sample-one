import React from "react";
import "./CheckoutButton.css"
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils"
import { AddressList } from "../Constants"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CheckoutButton = (props) => {
  const navigate = useNavigate();
  const { cartItemList = [], heading = "" } = props;
  const [totalPrice, setTotalPrice] = React.useState(0);
  const notify = () => toast.error("Please select or add a address for delivery");

  React.useEffect(() => {
    let price = 0;
    cartItemList.forEach((item) => {
      price = price + (item?.discountPrice * (item?.quantity || 1));
    })
    setTotalPrice(price);
  }, [cartItemList])

  const checkoutButtonClick = () => {
    const savedAdress = getFromLocalStorage(AddressList) || [];
    if (!savedAdress.length) {
      notify();
      return;
    }
    navigate('/ordersummary');;
  }

  if (!cartItemList.length) return null;

  return (
    <>
      <div className="checkoutContainer" >
        <div className="checkoutHeading">
          <div className="priceStyle">
            <div className="priceText">Total Price</div>
            <span>&#8377;</span><b>{totalPrice}</b>
          </div>
          <div className="placeOrderContainer" onClick={checkoutButtonClick}>
            <button
              type="button"
              className="placeOrderButton"
            >
              {heading}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        autoClose={5000}
        pauseOnHover={true}
        closeButton={false}
      />
    </>
  )
}

export default CheckoutButton;