import './App.css';
import React from 'react';

function App() {
  const [infoData, setInfoData] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    const personInfo = fetch("https://randomuser.me/api/");
    personInfo.then((res) => res.json())
    .then((success) => {
      setInfoData(success?.results[0]);
    }).catch((error) => {
      console.log(error);
    });
  }, [refresh]);

  return (
    <div>
      <div className="buttonContainer" onClick={ () => { setRefresh(!refresh); }}>
        <button className="buttonAlign">Reload</button>
      </div>
      <div className="container">
        <div className="fisrtPart">
          <div>
            <label>Name</label>: <b>{infoData?.name?.title} {infoData?.name?.first} {infoData?.name?.last}</b>
          </div>
          <div>
            <label>Gender</label>:
            {infoData?.gender}
          </div>
          <div>
            <label>Email</label>: {infoData?.email}
          </div>
          <div>
            <label>Age</label>: {infoData?.dob?.age}
          </div>
          <div>
            <label>Location</label>: {infoData?.location?.street?.number}, {infoData?.location?.street?.name}, {infoData?.location?.city}, {infoData?.location?.state}, {infoData?.location?.country}, {infoData?.location?.postcode}
          </div>
          <div>
            <label>Phone</label>: {infoData?.cell}
          </div>
        </div>
          <div className="imgContainer">
            <img
              src={infoData?.picture?.large}
              alt="pic"
              className="picImg"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
