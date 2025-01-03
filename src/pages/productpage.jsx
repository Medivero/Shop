import React, { useEffect, useState } from "react";
import './productpagestyle.css'

import Footer1 from "../footer";
import MainMenu from "../main-menu";
import { useParams } from "react-router-dom";
import PreLoader from "../preloader";


function ProductPage(){
  const {id} = useParams();
  const [name1,setName] = useState('none')
  const [image1,setImage] = useState('none')
  const [desc1,setDesc] = useState('none')
  const [price1,setPrice] = useState('none')
  const [rating1,setRating] = useState('none')
  useEffect(() => {
    fetch(`http://194.58.34.224:14342/api/Product/GetById/${id}`, {
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) =>{
      setName(data.name)
      setDesc(data.description)
      setImage(data.image)
      setPrice(data.price)
      setRating(data.rating)
    })
  })
    return (
    <>
    <PreLoader></PreLoader>
        <MainMenu></MainMenu>
      <main className="background-product-main">
        <div className="product-box">
          <div className="correct-title-image">
            <img src={image1} alt="Image wasn't found" className="product-image"/>
            <div>
              <div className="product-title">{name1}</div>
            <article className="description-product">
              {desc1}
            </article>
            </div>
          </div>
          <div>
            <div className="price-title">Цена: {price1}р.</div>
            <article className="rating-box">Рейтинг: {rating1}</article>
          </div>
            <div>Хотите добавить в корзину?</div>
            <button className="button-add-cart">Добавить в корзину</button>
        </div>
      </main>
      <Footer1/>
    </>
    )
}


export default ProductPage;