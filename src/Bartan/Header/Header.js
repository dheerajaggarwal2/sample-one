import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./Header.css"
import { CartItemsLS } from "../Constants";
import { getFromLocalStorage } from "../utils";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = (props) => {
  const cartItems = getFromLocalStorage(CartItemsLS) || [];
  const { title = "" } = props;
  const [cartCount, setCartCount] = React.useState(cartItems.length || 0)
  const getcount = useSelector(state => state);

  const goBack = () => {
    window.history.back();
  }

  React.useEffect(() => {
    console.log("dheeraj inside getcount", getcount)
    if (getcount) {
      setCartCount(getcount);
    }
  }, [getcount])
  
  return (
    <div className="headerContainer">
      <div className="backArrowStyle" onClick={() => {goBack()}}>
        <BiArrowBack />
      </div>
      <div className="titleHeaderContainer">{title}</div>
      <div className="cartIconStyle">
        <AiOutlineShoppingCart />
        {!!cartCount &&
          <span className="cartCoutStyle">
            {cartCount}
          </span>
        }
      </div>
    </div>
  )
}

export default Header;