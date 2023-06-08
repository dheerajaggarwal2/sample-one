import React from "react";
import "./AddToCart.css"

const AddToCart = (props) => {
  const { heading = "" } = props
  return(
    <div className="footerCartContainer">
      <div className="footerHeading">{heading}</div>
    </div>
    
  )

}

export default AddToCart;