import React from "react";
import { PanListingProductsJson } from "../PanListingProductsJson";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import { getDiscountPercentage } from "./../../utils"

import "./../../Bartan.css"
import "./PanListing.css"

const PanListing = () => {
  const navigate = useNavigate();

  const rowChunks = [];
  for (let i = 0; i < PanListingProductsJson.length; i = i + 2) {
      const chunk = PanListingProductsJson.slice(i, i + 2);
      rowChunks.push(chunk);
  }

  const goToDetailsPage = (id) => {
    navigate(`/panDetails/${id}`);;
  }

  return (
    <>
      <Header title="Pan utensils"/>
      <div className="mainBartanContainer">
        {rowChunks.map((rowData, parentIndex) => {
          return(
            <div className="bartanContainer" key={parentIndex}>
              {rowData.map((item, childIndex) => {
                return (
                  <div className="gridContainer"
                    key={item?.name + childIndex}
                    onClick={() => goToDetailsPage(item?.id)}
                  >
                    <div className="imgContainer">
                      <img
                        className="imageStyle"
                        src={item?.image}
                        alt="no"
                      />
                    </div>
                    <div className="productInfo">
                      <div>
                        <div className="productName">{item?.name}</div>
                        <div>
                          <div className="discountProductPrice">
                            <span>&#8377;</span><b>{item?.discountPrice}</b>
                          </div>
                          <div className="actualProducPrice">
                            <span>&#8377;</span>{item?.actualPrice}
                          </div>
                          <div className="discountpercnt">
                            {getDiscountPercentage(item?.actualPrice, item?.discountPrice)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              }
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default PanListing;