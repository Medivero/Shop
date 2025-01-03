import React, { useEffect, useState } from "react";
import './preloader.css'

function PreLoader(){
    const [state,setState] = useState(0);
    setTimeout(() =>{
        setState(1)
    },1000)
    return (
        <div className={`loader ${state ? 'loaded' : 'not-loaded'}`}>
            <div className="loader-text">
                Mediv's shop    
            </div>
            <div className="box-loader">
            </div>
        </div>
    )
}

export default PreLoader;