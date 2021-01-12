import React from 'react'
import {Link} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";
import "../App.css";

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    //If shoe not found
  if (!shoe) {
    return <h2>Product Not Found !</h2>;
  }
    return (
        <div>
           <Link className="back-btn" to="/product">
            <AiOutlineRollback title="Go back" height="30px" />
           </Link> 
           <div className="product-items">
           <h3 className="shoe-name">{shoe.name}</h3>
           <h2 className="shoe-price">Price = ${shoe.price}</h2>
           <img
           src={shoe.img2}
           alt="Shoe"
           title={shoe.name}
           className="shoe-image"
           />
           </div>
        </div>
    )
}

export default ProductItem;
