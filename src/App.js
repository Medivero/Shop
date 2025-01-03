import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";


// pages
import AboutUs from "./pages/aboutus";
import Main from "./main";
import CartPage from "./pages/cartpage";
import ProfilePage from "./pages/profilepage";
import ProductPage from "./pages/productpage";
import CategoryPage from "./pages/category";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Cart" element={<CartPage></CartPage>}></Route>
        <Route path="/Profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/product/:id" element={<ProductPage></ProductPage>}></Route>
        <Route path="/category/:id" element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
