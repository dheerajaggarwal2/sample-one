import React from "react";
import Header from "../Header/Header";
import { getFromLocalStorage } from "../utils";
import { AddressList, CartItemsLS } from "../Constants";
import "./OrderSummary.css"
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import PriceSection from "./PriceSection";
import Payment from "./Payment";

const OrderSummary = () => {
 
  const cartItems = getFromLocalStorage(CartItemsLS) || [];
  const savedAdress = getFromLocalStorage(AddressList) || [];
  const selectedAddress = savedAdress.find((element) => {
    return element?.isSelected;
  });
  

  return (
    <>
      <Header title="Order Summary" showCartIcon={false} />
      <div className="orderSummaryBartanContainer">
        <div className="showOrderAddressContainer">
          <div className="orderAddressField">
            <b>Deliver To:</b> {`${selectedAddress?.username}, ${selectedAddress?.address}, ${selectedAddress?.city}, ${selectedAddress?.state} ${selectedAddress?.pincode}`}
          </div>
        </div>
        <PriceSection
          cartItemList={cartItems}
        />
        <Payment />
      </div>
      <CheckoutButton
        cartItemList={cartItems} 
        heading="Place order"
        type={1}
      />
    </>
  )  
}

export default OrderSummary;