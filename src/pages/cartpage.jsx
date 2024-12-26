import React, { useEffect, useState } from "react";
import Header1 from "../header";
import Signmenu from "../signmenu";
import Filter from "../filter-menu";
import Footer1 from "../footer";
import './cartpagestyles.css'
import { data } from "react-router-dom";

function CartPage(){
  const defaultValue = []
  const [category, setCategory] = useState(defaultValue)
  const getApiDataUser = async () => {
      const res = await fetch('http://192.168.3.5:5000/api/User/GetById/2')
      .then((res)=> res.json())

      setCategory(res)
  }
  useEffect(()=>{
    getApiDataUser();
  }, [])
    return(
        <>
            <div className="position-menu">
        <Header1/>
          <nav>
            <ul className="main-menu">
              <button className="menu-button">
                <b>___</b>
                <b>__</b>
                <b>_</b>
              </button>
              <li className="title-menu">
                <a href="/">Mediv's shop</a>
              </li>
              <li>
                <div className="search-info">
                  <div className="find"></div>
                  <input type="text" placeholder="Поиск..." className="search-info-input"></input>
                  <div className="dots"></div>
                </div>
              </li>
              <Signmenu></Signmenu>
              |
              <li className="cart">
                <a href="/Cart">Корзина</a>
              </li>
            </ul>
          </nav>
          <Filter></Filter>
      </div>
      <div className="empty-box"></div>
      <main className="main-cart-bg">
        <div className="cart-text-cart">Корзина</div>
        <div className="cart-box-container">
            <section className="cart-box-cart">
                <div className="cart-staff-text">Товары:</div>
                <div>
                  {category.email}
                </div>
            </section>
            <div className="cart-payment-box"></div>
        </div>
      </main>
      <Footer1/>
        </>
    )


}

export default CartPage;