import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./game/Main"
import Games from "./game/Game"
import ArtistDetails from "./ArtistDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main />} />
          <Route path="games" element={<Games />} />
          <Route path="details/:artistId" element={<ArtistDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
