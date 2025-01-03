import React, { useEffect, useState } from "react";
import Header1 from "../header";
import Signmenu from "../signmenu";
import Filter from "../filter-menu";
import Footer1 from "../footer";
import './cartpagestyles.css'
import { data } from "react-router-dom";
import MainMenu from "../main-menu";
import PreLoader from "../preloader";

function CartPage(){
  
  const [state, setState] = useState(0)
  const [address, setAddress] = useState('none')
  const handleclick = () => {
    setState(!state)
  }
  const defaultValue = []
  const [category, setCategory] = useState(defaultValue)
  const getApiDataUser = async () => {
      const res = await fetch(`http://194.58.34.224:14342/api/User/GetById/${document.cookie}`)
      .then((res)=> res.json())
      .then((data) => {
        setAddress(data.address)
      })
  }
  useEffect(()=>{
    getApiDataUser();
  }, [])
    return(
        <>
        <PreLoader></PreLoader>
        <MainMenu/>
      <main className="main-cart-bg">
        <div className={`oplata-menu ${state ? 'oplata-menu-open' : 'oplata-menu-close'}`}>
          <form action="">
            <legend className="address-box">
              Адрес:
              <input className="address-box" type="text" value={address}/>
              Нажмите чтобы изменить
            </legend>
          </form>
          <div>
            Сумма:
          </div>
          <div>Способ оплаты: </div>
          <button>Оплатить</button>
        </div>
        <div className="cart-text-cart">Корзина</div>
        <div className="cart-box-container">
            <section className="cart-box-cart">
                <div className="cart-staff-text">Товары:</div>
                <div>
                  {category.email}
                </div>
            </section>
            <div className="cart-payment-box">
              <div className="oplata-title">
                Оплата
              </div>
              <div>
                Общая сумма:
              </div>
              <div className="button-oplata-box">
                <button onClick={handleclick} className="button-oplata">
                  Перейти к оплате
                </button>
              </div>
            </div>
        </div>
      </main>
      <Footer1/>
        </>
    )


}

export default CartPage;