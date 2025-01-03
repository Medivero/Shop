import React, { use, useState } from "react";
// styles
import './styles.css';
import './rg-menu.css'
import './footerstyle.css';
import './filterstyles.css';
import './pages/aboutusstyles.css'
// functions
import WidgetList1 from "./first-list";
import WidgetList2 from "./second-list";
import WidgetList3 from "./third-list";
import WidgetList4 from "./fourth-list";
import Footer1 from "./footer";
import MainMenu from "./main-menu";
import SliderMain from "./slidermainpage";
import PreLoader from "./preloader";

function Main(){
    return (
      <>
      <PreLoader></PreLoader>
      <MainMenu/>
        <main>
          <SliderMain/>
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
