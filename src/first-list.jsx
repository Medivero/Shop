import react, { useEffect } from "react";
import { use } from "react";
import { useState } from "react";
import './list-styles.css'
function WidgetList1(){
  const [products, setProducts] = useState([]); 
  const [tokenKey, setTokenKey] = useState(0);
  const findTokey = async () => {
    const res = await fetch('http://194.58.34.224:14342/api/ProductPartition/GeneratePersonalSequenceToken', {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      }
    })
    const token = await res.text()
    console.log(token)
    return token
  }
  const fetchProducts = async () => {
    try {
      const keyToken =  await findTokey()
      const response = await fetch("http://194.58.34.224:14342/api/ProductPartition/GetPartition/6", {
        method: 'GET',
        headers: {
          'x-partition-token' : `${keyToken}`
        }
      }); 
      const data = await response.json(); 
      setProducts(data); 
    
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

    return(
        <div className="product-list-main">
            <label className="text-before-plist">
            <div>Вкуснейшие <b className="smartphones">Печеньки</b></div>
            <div><a href="#">Посмотреть все &#128073;</a></div>
            </label>
            <ul className="product-list-container">
        {products.map((product) => (
            <a href={`/Product/${product.id}`}>
          <li key={product.id} className="product-list-element">
              <div className="product-top-element">
                <img
                  className="correct-scale-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="product-bottom-element">
                <p>{product.name} </p>
                  <strong> {product.price}р.</strong>
              </div>
          </li>
            </a>
        ))}
      </ul>
          </div>
    )
}

export default WidgetList1;