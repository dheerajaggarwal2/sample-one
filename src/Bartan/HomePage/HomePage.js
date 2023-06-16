import React from "react";
import CarousalView from "../CommonComponenets/CarousalView";
import GridView from "../CommonComponenets/GridView";
import Header from "../Header/Header";
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <Header title="" showBackArrowIcon={false} showTitle={false} />
      <div className="homePageContainer">
        <CarousalView heading="Pans" />
        <GridView heading="Plastic" />
      </div>
    </>
  )
};

export default HomePage;