import React, { useEffect } from "react";
import { useState } from "react";
import MainMenu from "../main-menu";
import Footer1 from "../footer";
import './category.css';
import PreLoader from "../preloader";
function CategoryPage(){
    
    return (
        <>
        <PreLoader></PreLoader>
        <MainMenu></MainMenu>
        <main className="main-category">
            <ul>
                <a>
                    <li>
                        
                    </li>
                </a>
            </ul>
        </main>
        <Footer1></Footer1>
        </>
    )
}

export default CategoryPage;