import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./Header.css"
import { CartItemsLS } from "../Constants";
import { getFromLocalStorage } from "../utils";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const cartItems = getFromLocalStorage(CartItemsLS) || [];
  const { title = "", showBackArrowIcon = true, showCartIcon = true, showTitle = true } = props;
  const [cartCount, setCartCount] = React.useState(cartItems.length || 0)
  const getcount = useSelector((state) => {
    return state?.cartCount;
  });
  console.log("dheeraj getcount", getcount)

  const goBack = () => {
    window.history.back();
  }

  const goToCartPage = () => {
    navigate(`/cartList`);;
  }

  React.useEffect(() => {
    if (getcount) {
      setCartCount(getcount);
    }
  }, [getcount])
  
  return (
    <div className="headerContainer">
      {showBackArrowIcon && <div className="backArrowStyle" onClick={() => {goBack()}}>
        <BiArrowBack />
      </div>}
      {showTitle && <div className="titleHeaderContainer">{title}</div>}
      {showCartIcon && <div className="cartIconStyle" onClick={goToCartPage}>
        <AiOutlineShoppingCart />
        {!!cartCount &&
          <span className="cartCoutStyle">
            {cartCount}
          </span>
        }
      </div>}
    </div>
  )
}

export default Header;