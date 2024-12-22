import React, { use, useState } from "react";
import './styles.css';
import Header1 from "./header";
import SidebarMenu from "./sidebar";
import Filter from "./filter-menu";
import WidgetList1 from "./first-list";
import WidgetList2 from "./second-list";
import WidgetList3 from "./third-list";
import WidgetList4 from "./fourth-list";
import Footer1 from "./footer";
import './footerstyle.css';

function App(){
  const [isOn, isOff] = useState(false);

  const handleClick = ()=>{
    isOff(!isOn);
  }
  const handleClick2 = ()=>{
    isOff(!isOn)
  }
    return (
      <>
      <div className="position-menu">
        <Header1/>
          <nav className="">
             <SidebarMenu isOn={isOn} handleClick2={handleClick2}/>
            <ul className="main-menu">
              <button onClick={handleClick} className="menu-button">
                <b>___</b>
                <b>__</b>
                <b>_</b>
              </button>
              <li className="title-menu">
                Mediv's shop
              </li>
              <li>
                <div className="search-info">
                  <div className="find"></div>
                  <input type="text" placeholder="Search essentials, grocceries and more" className="search-info-input"></input>
                  <div className="dots"></div>
                </div>
              </li>
              <li className="sign-in">
                <a href="#">Sign Up/Sign In</a>
              </li>
              |
              <li className="cart">
                <a href="#">Cart</a>
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


export default App;
