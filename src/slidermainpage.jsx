import React, { useState } from "react";
import './sliderstyles.css'
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


function SliderMain(){
    const [image,setImage] = useState('https://s0.rbk.ru/v6_top_pics/resized/1280xH/media/img/4/04/346843326750044.webp')
    const previousClick = () =>{
        if(image === 'https://s0.rbk.ru/v6_top_pics/resized/1280xH/media/img/4/04/346843326750044.webp'){
            setImage('https://img.freepik.com/free-photo/beautiful-selective-focus-shot-crystal-ball-reflecting-breathtaking-sunset_181624-8579.jpg?t=st=1735385358~exp=1735388958~hmac=976fe0e69143d8f0adc587cdbf706c6038f99b798edcc2031f7a8e6e09c5d7c0&w=1800')
        }
        else{
            setImage('https://s0.rbk.ru/v6_top_pics/resized/1280xH/media/img/4/04/346843326750044.webp')
        }
    }
    return (
        <>
        <div className="silder-main-container">
            <div className="moving-text-container">
                <div className="moving-text moving-right">Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop Mediv's shop</div>
                <div className="moving-text moving-left">Чай | Напитки | Кондитерские изделия | Торты | Печенья | Пончики | Еда | Сладости</div>
            </div>
            </div>
        </>
    )
}

export default SliderMain;