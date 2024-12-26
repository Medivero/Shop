import React, { use, useState } from "react";
// styles
import './styles.css';
import './rg-menu.css'
import './footerstyle.css';
import './filterstyles.css';
import './pages/aboutusstyles.css'
// functions
import Header1 from "./header";
import Filter from "./filter-menu";
import WidgetList1 from "./first-list";
import WidgetList2 from "./second-list";
import WidgetList3 from "./third-list";
import WidgetList4 from "./fourth-list";
import Footer1 from "./footer";
import Signmenu from "./signmenu";

function Main(){
    return (
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
              <Signmenu/>
              |
              <li className="cart">
                <a href="/Cart">Корзина</a>
              </li>
            </ul>
          </nav>
          <Filter/>
      </div>
      <div className="empty-box">
      </div>
        <main>
          <div className="poster-main">
          </div>
          <WidgetList1/> 
          <WidgetList2/>
          <WidgetList3/>
          <WidgetList4/>
          <Footer1/>
        </main>
      </>
    )

}


export default Main;
