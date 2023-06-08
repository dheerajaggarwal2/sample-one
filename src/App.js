import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./CrissCross/Games"
import ArtistDetails from "./ArtistDetails"
import FormDetails from "./StoreExample/FormDetails"
import PanListing from './Bartan/Pan/PanListing/PanListing';
import PanDetails from './Bartan/Pan/PanDetails/PanDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<PanListing />} />
          <Route path="games" element={<Games />} />
          <Route path="formDetails/:name/:age" element={<FormDetails />} />
          <Route path="panDetails/:id" element={<PanDetails />} />
          <Route path="details/:artistId" element={<ArtistDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
