import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main"
import ArtistDetails from "./ArtistDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main />} />
          <Route path="details" element={<ArtistDetails />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
