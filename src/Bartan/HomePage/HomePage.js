import React from "react";
import X from "../CommonComponenets/CarousalView";
import GridView from "../CommonComponenets/GridView";
import Header from "../Header/Header";
import "./HomePage.css"

const HomePage = () => {
  // const [message, setMessage] = React.useState("");

  // React.useEffect(() => {
  //   fetch("http://localhost:8000/api/data")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <>
      <Header title="" showBackArrowIcon={false} showTitle={false} />
      <div className="homePageContainer">
        <X heading="Pans" />
        <GridView heading="Plastic" />
      </div>
    </>
  )
};

export default HomePage;