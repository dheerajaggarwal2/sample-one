import React from "react";
import "./AddToCart.css";
import { getFromLocalStorage, setInLocalStorage } from "../utils";
import { CartItemsLS } from "../Constants";
import { useDispatch } from "react-redux";
import { CART_COUNT } from "../../constants"


const AddToCart = (props) => {
  const dispatch = useDispatch();
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
    </div>
  )
}

export default AddToCart;