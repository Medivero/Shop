import React, { useState } from "react";
import Filter from "./filter-menu";
import Signmenu from "./signmenu";
import Header1 from "./header";

function MainMenu(){
  const [search,setSearch] = useState(0);
  const [result,setResult] = useState('none');
  const [linkresult,setlink] = useState(0)
  function dotsClick(){
    setSearch(0)
  }
  async function Poisk(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const poiskUnit = formData.get('poisk-input')
    for (let i = 0; i < 10; i++ ){
      try{
        const res = await fetch(`http://194.58.34.224:14342/api/Product/GetById/${i}`,{
          method: 'GET'
        })
        const data = await res.json();
        if (data.name == poiskUnit){
          console.log('Naideno!')
          setSearch(!search)
          setlink(data.id)
          setResult(data.name)
          break
        }
        else{
          console.log('Ne naideno')
          continue
        }
      } catch {
        console.log('Ошибка')
      }
    }
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
              <li>
                <a className="title-menu" href="/">Mediv's shop</a>
              </li>
              <li>
                <div className="search-info">
                  <form onSubmit={Poisk} id="poisk" className="search-info-input">
                    <button type="submit" className="find"></button>
                    <input type="text" name="poisk-input" placeholder="Поиск..." className="search-info-input" required></input>
                  </form>
                  <div onClick={dotsClick} className="dots"></div>
                </div>
                  <div className={`box-search-result ${search ? 'box-result-open' : 'box-result-close'}`}>
                    <a href={`/product/${linkresult}`}><div className="text-result-search">{result}</div></a>
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
        </>
    )
}
export default MainMenu;