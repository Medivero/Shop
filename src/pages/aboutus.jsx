import React from "react";
import Header1 from "../header";

function AboutUs(){
    return(
        <>
            <Header1></Header1>
            <nav>
                <ul className="about-us-menu">
                    <li className="about-us-menu-element2">Информация о нас</li>
                    <li className="about-us-menu-element1"><a className="giper-color" href="/">Главная страница</a></li>
                </ul>
            </nav>
            <section className="about-us-box-main">
                <div className="about-us-info">
                    Сайт созданный двумя энтузиастами
                </div>
            </section>
        </>
        
    )
}
export default AboutUs;