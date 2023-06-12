import React from "react";
import Header from "../../Header/Header";
import { getFromLocalStorage, getDiscountPercentage, setInLocalStorage } from "../../utils";
import { CartItemsLS } from "../../Constants";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import "./CartList.css"
import { useNavigate } from "react-router-dom";
import CheckoutButton from "../../CheckoutButton/CheckoutButton";

const CartList = () => {
  const navigate = useNavigate();
  const cartItems = getFromLocalStorage(CartItemsLS) || [];
  const [cartItemList, setCartItems] = React.useState(cartItems)
  const decreaseQuantity = (cartItem) => {
    const quantity = (cartItem?.quantity || 1);
    if (quantity <= 1) return;
    const getCartItems = getFromLocalStorage(CartItemsLS) || [];
    const updatedCartList = getCartItems.map((item) => {
      if (item?.id === cartItem?.id) {
        const updateQuantity = {
          ...item,
          quantity : quantity - 1
        }
        return updateQuantity;
      }
      return item;
    })
    setInLocalStorage(CartItemsLS, updatedCartList);
    setCartItems(updatedCartList);
  }

  const increaseQuantity = (cartItem) => {
    const quantity = (cartItem?.quantity || 1);
    if (quantity >= 5) return;
    const getCartItems = getFromLocalStorage(CartItemsLS) || [];
    const updatedCartList = getCartItems.map((item) => {
      if (item?.id === cartItem?.id) {
        const updateQuantity = {
          ...item,
          quantity : quantity + 1
        }
        return updateQuantity;
      }
      return item;
    })
    setInLocalStorage(CartItemsLS, updatedCartList);
    setCartItems(updatedCartList);
  }

  const removeCartItem = (cartItem) => {
    const getCartItems = getFromLocalStorage(CartItemsLS) || [];
    const updatedCartList = getCartItems.filter((item) => {
      return (item?.id !== cartItem?.id) 
    })
    setInLocalStorage(CartItemsLS, updatedCartList);
    setCartItems(updatedCartList);
  }

  const gotToHomePage = () => {
    navigate("/");;
  }

  return (
    <>
      <Header title="My Cart" showCartIcon={false} />
      <div className="cartBartanContainer">
        {cartItemList.map((item, index) => {
          return (
            <div
              key={`${item.id}${index}`}
              className="cartContainer"
            >
              <div className="cartImageContainer">
                <div className="cartImgContainer">
                  <img
                    className="imageStyle"
                    src={item?.image}
                    alt="no"
                  />
                </div>
                <div
                  className="removeItem"
                  onClick={() => { removeCartItem(item) }}
                >
                  Remove
                  <RiDeleteBinLine />
                </div>
              </div>
              <div className="cartProductInfo">
                <div className="cartProductName">
                  {item.name}
                </div>
                <div className="cartPriceContainer">
                  <div className="cartDiscountProductPrice">
                    <span>&#8377;</span><b>{item?.discountPrice}</b>
                  </div>
                  <div className="cartActualProducPrice">
                    <span>&#8377;</span>{item?.actualPrice}
                  </div>
                  <div className="cartDiscountpercnt">
                    {getDiscountPercentage(item?.actualPrice, item?.discountPrice)}
                  </div>
                </div>
                <div className="quantityPriceContainer">
                  <div className="qtyText">
                    Qty
                  </div>
                  <div
                    className="qtyDecrease"
                    onClick={() => {decreaseQuantity(item)}}
                  >
                    <AiOutlineMinus />
                  </div>
                  <div className="productQuantity">
                    {item?.quantity || 1}
                  </div>
                  <div
                    onClick={() => { increaseQuantity(item) }}
                    className="qtyIncrease"
                  >
                    <AiOutlinePlus />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          )
        })
        }
        {!cartItemList.length &&
          <div className="emptyCart">
            <div>
              Your cart is empty
            </div>
            <button
              type="button"
              className="emptyCartbutton"
              onClick={gotToHomePage}
            >
              Continue Shopping
            </button>
          </div>
        }
      </div>
      <CheckoutButton cartItemList={cartItemList} />
    </>
  )  
}

export default CartList;