import React, { useState } from "react";
import Header1 from "../header";
import Signmenu from "../signmenu";
import Filter from "../filter-menu";
import './profilepagecss.css';
import Footer1 from "../footer";

function ProfilePage(){
   const [nickname, setNickname] = useState('none')
   const [address, setAddress] = useState('none')
   const [email, setEmail] = useState('none')
   const [wallet, setWallet] = useState('none')
    const url = `http://192.168.3.5:5000/api/User/GetById/${document.cookie}`
    fetch(url, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
      setNickname(data.login)
      setAddress(data.address)
      setEmail(data.email)
      setWallet(data.wallet)
    })
    function quitProfile(){
      document.cookie = `1; max-age=-1`
    }
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
        <main className="profile-main-container">
          <div className="title-profile-info">Информация о профиле</div>
            <div className="profile-container">
              <div className="profile-element">
                Имя профиля: {nickname}
              </div>
              <div className="profile-element">
                Кошелек: {wallet}
              </div>
              <div className="profile-element">
                Адрес: {address}
              </div>
              <div className="profile-element">
                Адрес электроной почты: {email}
              </div>
              <a onClick={quitProfile} href="/" className="quitprofile">Выйти из профиля</a>
            </div>
        </main>
        <Footer1/>
        </>
    )
}

export default ProfilePage;