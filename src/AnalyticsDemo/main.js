import React from "react";
import './analytics.css';
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const redirectPage = function() {
    navigate('/firstapp');;
  }

  return (
    <div className="mainContainer">
      <div className="container">
        {[1,2,3,4,5,6,7,8, 10].map((value, index) => {
          return (
            <div className="card" onClick={redirectPage}>
              <span className="cardText">{value + " card"}</span>
            </div>
          )
        })
        }
      </div>
    </div>
  )

}
export default Main;