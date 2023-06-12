import React from "react";
import "./AddToCart.css";
import "./../Bartan.css"
import { getFromLocalStorage, setInLocalStorage } from "../utils";
import { CartItemsLS } from "../Constants";
import { useDispatch } from "react-redux";
import { CART_COUNT } from "../../constants"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const AddToCart = (props) => {
  const dispatch = useDispatch();
  const notify = () => toast(
    <div>
      <div className="addToCartToastText">Item Added to cart</div>
      <div className="goToCartToastText"><Link to="/cartList">Go to Cart</Link></div>
    </div>
  );
  const { heading = "", item } = props;
  const checkItemAdded = () => {
    const cartItems = getFromLocalStorage(CartItemsLS) || [];
    return cartItems?.find((element) => {
      return element?.id === item?.id;
    });
  }
  
  const [itemAdded, setItemAdded] = React.useState(checkItemAdded())

  const pushToCart = () => {
    if (!itemAdded) {
      notify();
      const cartItems = getFromLocalStorage(CartItemsLS) || [];
      const updatecartItems = [item, ...cartItems]
      setInLocalStorage(CartItemsLS, updatecartItems)
      setItemAdded(checkItemAdded());
      dispatch({ type: CART_COUNT, payload: updatecartItems.length });
    }
  }
 
  return(
    <div className="footerCartContainer" onClick={pushToCart}>
      <div className="footerHeading">{itemAdded ? "Added to Cart" : heading}</div>
      <ToastContainer
        className="toastStyling"
        position="bottom-center"
        hideProgressBar={true}
        autoClose={5000}
        pauseOnHover={true}
        closeButton={false}
      />
    </div>
  )
}

export default AddToCart;