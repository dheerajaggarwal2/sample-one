import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./CrissCross/Games"
import ArtistDetails from "./ArtistDetails"
// import StoreExample from './StoreExample/main';
// import HistoryExample from './historyExample/historyExample';
import FormDetails from "./StoreExample/FormDetails"
import AnalyticsDemo from './AnalyticsDemo/main'
import FirstApp from './AnalyticsDemo/FirstApp'
// import Main from "./Main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<AnalyticsDemo />} />
          <Route path="games" element={<Games />} />
          <Route path="formDetails/:name/:age" element={<FormDetails />} />
          <Route path="firstapp" element={<FirstApp />} />
          <Route path="details/:artistId" element={<ArtistDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
