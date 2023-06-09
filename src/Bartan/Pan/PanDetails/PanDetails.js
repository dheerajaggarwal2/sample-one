import React from "react";
import { useParams } from "react-router";
import { PanListingProductsJson } from "../PanListingProductsJson";
import Header from "../../Header/Header";
import { getDiscountPercentage } from "./../../utils"
import "./../../Bartan.css"
import "./PanDetails.css"
import AddToCart from "../../AddToCart/AddToCart";

const Pandetails = () => {
  let { id } = useParams();
  const panDetails = PanListingProductsJson[id];
  return (
    <>
      <div>
      <Header title={panDetails?.name} />
      <div className="mainBartanContainer">
        <div className="imgContainer">
          <img
            className="imageStyle"
            src={panDetails?.image}
            alt="no"
          />
        </div>
        <div className="productDetailsName">
          {panDetails?.name}
        </div>
        <div className="productDetailsPrice">
          <div className="discountProductPrice">
            <span>&#8377;</span><b>{panDetails?.discountPrice}</b>
          </div>
          <div className="actualProducPrice">
            <span>&#8377;</span>{panDetails?.actualPrice}
          </div>
          <div className="discountpercnt">
            {getDiscountPercentage(panDetails?.actualPrice, panDetails?.discountPrice)}
          </div>
        </div>
        <div className="sizeProductDetails">
          <div><b>Capacity</b></div>
          <div className="sizeValue">{`${panDetails?.size} L`}</div>
        </div>
      </div>
      <AddToCart heading="Add to Cart" item={panDetails}/>
      </div>
    </>
  );
}

export default Pandetails