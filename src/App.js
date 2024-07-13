// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Main from "./InterviewPractise/Main";
// import UserDetails from "./InterviewPractise/User/UserDetails";
// import Main from "./Search/Main"

// const App = () => {
//   return (
//     <BrowserRouter >
//       <Routes>
//         <Route path="/">
//           <Route index element={<Main />} />
//           <Route path="details/:id" element={<UserDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// };

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./CrissCross/Games"
import FormDetails from "./StoreExample/FormDetails"
import PanListing from './Bartan/Pan/PanListing/PanListing';
import PanDetails from './Bartan/Pan/PanDetails/PanDetails';
import CartList from './Bartan/Pan/CartList/CartList';
import OrderSummary from './Bartan/OrderSummary/OrderSummary';
import HomePage from './Bartan/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
          <Route path="listing" element={<PanListing />} />
          <Route path="games" element={<Games />} />
          <Route path="panDetails/:id" element={<PanDetails />} />
          <Route path="cartList" element={<CartList />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          <Route path="formDetails/:name/:age" element={<FormDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
