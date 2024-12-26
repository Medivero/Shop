import React, { useEffect } from "react";
import { useState } from "react";
import { data } from "react-router-dom";
import CartPage from "./pages/cartpage";

function Signmenu(event){
    useEffect((provekraId))

    const [nickname, setNickname] = useState('Войти/Рег.');
    const [state, setState] = useState(0)
    const [profileLink, setLink] = useState('#')
    
    const click = () =>{
        if (nickname == 'Войти/Рег.'){
            setState(!state)
        }
    }
    const [swap,setSwap] = useState(0)
    const swapClick = () =>{
        if (nickname == 'Войти/Рег.'){
            setSwap(!swap)
        }
    }
    async function getNewPerson(event){

        const formData = new FormData(event.target); 
        const regLogin = formData.get('reglogin'); // Извлекаем поле reglogin
        const regPassword = formData.get('regpass'); // Извлекаем поле regpass
        const registrationInfo ={
            login: regLogin,
            passwordHash: regPassword,
            email: 'dasfadf',
            address: 'address',
            wallet: 500
        }
        fetch('http://192.168.3.5:5000/api/User/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Указываем тип содержимого
            },
            body: JSON.stringify(registrationInfo)
        })
    }
    function provekraId(){
        if (document.cookie !== ''){
            fetch(`http://192.168.3.5:5000/api/User/GetById/${document.cookie}`, {
                method: 'GET'
            }).then((resp) => resp.json())
            .then((data1) => {
                setNickname(data1.login)
                setLink('/Profile')
            })
        }
    }
    async function logInPerson(event) {
        event.preventDefault()

        const formData1 = new FormData(event.target);
        const logInlogin = formData1.get('logIn');
        const loginpass = formData1.get('passWord');
    
        for (let i = 0; i> -1; i++){
            const res = await fetch(`http://192.168.3.5:5000/api/User/GetById/${i}`, {
                method: "GET"
            })
            const data = await res.json();
            if (logInlogin == data.login){
                console.log('Пользователь с таким логин существует!')
                if(loginpass == data.passwordHash){
                    document.cookie = `${data.id}`
                    console.log('Пароль верный!')
                    setNickname(data.login)
                    setState(!state)
                    setLink('/Profile')
                    break
                } else { 
                    console.log('Пароль неверный!')
                    break
                }
            }
            
        }
        
    }
    
    return(
        <div>
            <div className="sign-in">
                <div onClick={click}><a href={profileLink}>{nickname}</a></div>
            </div>
            <div className={`registr-menu ${state ? 'rg-menu-open' : 'rg-menu-close'}`}>
                <div >Добро пожаловать!</div>
                    <form onSubmit={logInPerson} id="login-box" className="submit-container">
                        <input type="text" name="logIn" id="login" placeholder="Логин" className="rg-login" required></input>
                        <input type='password' name="passWord" id="password" placeholder="Пароль" className="rg-password" required></input>
                        <button className="rg-button-submit" type="submit">Войти</button>
                    </form>
                <button onClick={swapClick} className="rg-button">Регистрация</button>
                <div className={`registration-menu ${swap ? 'registration-menu-open' : 'registration-menu-close'}`}>
                    <button onClick={swapClick} className="button-close-reg-menu">Close</button>
                    <form onSubmit={getNewPerson} id="registration" className="submit-container-reg">
                        <input type="text" name="reglogin" placeholder="Введите логин" required/>
                        <input type="password" name="regpass" placeholder="Введите пароль" required/>
                        <button type="submit">Зарегестрироваться</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Signmenu;