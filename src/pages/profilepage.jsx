import React, { useState } from "react";
import Header1 from "../header";
import Signmenu from "../signmenu";
import Filter from "../filter-menu";
import './profilepagecss.css';
import Footer1 from "../footer";
import MainMenu from "../main-menu";
import PreLoader from "../preloader";

function ProfilePage(){
   const [nickname, setNickname] = useState('none')
   const [address, setAddress] = useState('none')
   const [email, setEmail] = useState('none')
   const [wallet, setWallet] = useState('none')
    const url = `http://194.58.34.224:14342/api/User/GetById/${document.cookie}`
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
        <PreLoader></PreLoader>
        <MainMenu/>
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