import { PanListingProductsJson } from "../Pan/PanListingProductsJson";
import "./CarousalView.css"
import { useNavigate } from "react-router-dom";

const CarousalView = (props) => {
  const navigate = useNavigate();
  const { heading = "", showMore = true } = props;

  const redirectToListing = () => {
    navigate(`/listing`);;
  }

  return (
    <div className="carousalContainer">
      <div className="headingContainer">
        <div className="headingText">
          <b>{heading}</b>
        </div>
        {showMore &&<div className="seeAllText" onClick={redirectToListing}>
          Show more
        </div>}
      </div>
      <div className="scroll-images">
        {PanListingProductsJson.map((item, index) => {
          return(
            <div
              className="child"
              key={index}
            >
              <div className="carousalImageContainer">
                <img
                  className="carousalImageStyle"
                  src={item?.image}
                  alt="no"
                />
              </div>
              {item.name && <div className="carousalItemName"> 
                {item.name}
              </div>}
          </div>
          )
        })

        }
      </div>
    </div>
  )
};

export default CarousalView;