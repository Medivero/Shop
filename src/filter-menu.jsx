import react from "react";
import { useState } from "react";

function Filter( ){
    const [state, setState] = useState(false);
    const click = () =>{
      setState(!state)
    }
    return(
        <nav className="fixed-filter">
            <ul className="filter-menu">
              <li>
                <div onClick={click} className='filter-element image-cookies'>Печеньки</div>

                <div className={`grocceries-box ${state ? 'open-filter' : 'close-filter'}`}>
                  <ul>
                    <li>1</li>
                  </ul>
                </div>
              </li>
              <li className="filter-element">Пончики</li>
              <li className="filter-element">Торты </li>
              <li className="filter-element">Напитки </li>
              <li className="filter-element">Чай</li>
              
            </ul>
          </nav>
    )
}
export default Filter;