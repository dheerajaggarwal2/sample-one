import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./CrissCross/Games"
import ArtistDetails from "./ArtistDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Games />} />
          <Route path="games" element={<Games />} />
          <Route path="details/:artistId" element={<ArtistDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
