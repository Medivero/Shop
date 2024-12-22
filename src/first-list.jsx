import react from "react";

function WidgetList1(){
    return(
        <div className="product-list-main">
            <label className="text-before-plist">
            <div>Grab the best deal on <b className="smartphones">Smartphones</b></div>
            <div><a href="#">View All &#128073;</a></div>
            </label>
            <ul className="product-list-container">
              <li className="product-list-element">
                <div className="product-top-element"></div>
                <div className="product-bottom-element"></div>
              </li>
              <li className="product-list-element">
                <div className="product-top-element"></div>
                <div className="product-bottom-element"></div>
              </li>
              <li className="product-list-element">
                <div className="product-top-element"></div>
                <div className="product-bottom-element"></div>
              </li>
              <li className="product-list-element">
                <div className="product-top-element"></div>
                <div className="product-bottom-element"></div>
              </li>
              <li className="product-list-element">
                <div className="product-top-element"></div>
                <div className="product-bottom-element"></div>
              </li>
            </ul>
          </div>
    )
}

export default WidgetList1;