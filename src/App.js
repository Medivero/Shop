import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

// pages
import AboutUs from "./pages/aboutus";
import Main from "./main";
import CartPage from "./pages/cartpage";
import ProfilePage from "./pages/profilepage";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Cart" element={<CartPage></CartPage>}></Route>
        <Route path="/Profile" element={<ProfilePage></ProfilePage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
