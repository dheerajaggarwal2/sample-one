import React from "react";
import { PanListingProductsJson } from "../Pan/PanListingProductsJson";
import "./GridView.css"
import { useNavigate } from "react-router-dom";

const GridView = (props) => {
  const navigate = useNavigate();
  const rowChunks = [];
  const FourePrdoucts = PanListingProductsJson.slice(0,4);
  const { heading = "", showMore = true } = props;
  for (let i = 0; i < FourePrdoucts.length; i = i + 2) {
      const chunk = FourePrdoucts.slice(i, i + 2);
      rowChunks.push(chunk);
  }

  const redirectToListing = () => {
    navigate(`/listing`);;
  }

  return (
    <div className="gridViewContainer">
        <div className="headingContainer">
          <div className="headingText">
            <b>{heading}</b>
          </div>
          {showMore &&<div className="seeAllText" onClick={redirectToListing}>
            Show more
          </div>}
        </div>
       {rowChunks.map((rowData, parentIndex) => {
        return(
          <div className="gridRowParent" key={parentIndex}>
            {rowData.map((item, childIndex) => {
              return (
                <div className="gridRowChild"
                  key={item?.name + childIndex}
                >
                  <div className="gridImgContainer">
                    <img
                      className="gridImageStyle"
                      src={item?.image}
                      alt="no"
                    />
                  </div>
                  <div className="gridItemText">
                    {item?.name}
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
  )
};

export default GridView;