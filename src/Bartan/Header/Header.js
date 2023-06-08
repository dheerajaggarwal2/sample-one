import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "./Header.css"

const Header = (props) => {
  const { title = "" } = props;

  const goBack = () => {
    window.history.back();
  }
  
  return (
    <div className="headerContainer">
        <div className="backArrowStyle" onClick={() => {goBack()}}>
          <BiArrowBack />
        </div>
        <div className="titleHeaderContainer">{title}</div>
    </div>
  )
}

export default Header;