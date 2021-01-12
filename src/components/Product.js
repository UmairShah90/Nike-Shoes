import React from "react";
import { useSelector } from "react-redux";
import { add, selectProducts, store } from "../Store";
import { Link } from "react-router-dom";
import cartImage from "../images/shopping-cart.svg";
import "../App.css";
import  Tooltip  from "@material-ui/core/Tooltip";

function Product() {

  // Select Data from redux store
  const products = useSelector(selectProducts);
  return (
    <div>
      <div className="product-container">
        {products.map((product) => {
          // variables
          let id = product.id;
          let title = product.title;
          let imageUrl = product.imageUrl;
          let price = product.price;

          return (
            <div key={id} className="hvr-grow products">
              <h3 className="shoe-name">{title}</h3>
              <h2 className="shoe-price">{price}</h2>

              <Link key={id} to={`/product/${id}`}>
                <img
                  className="products-shoe-image"
                  title={title}
                  alt={title}
                  src={imageUrl}
                />
              </Link>
              <br />
              <Tooltip title="Add to cart" aria-label="add to cart">
                <button className="cart-button" onClick={() => console.log(store.dispatch(add(product)))}>
                  <img
                    className="cart-image"
                    src={cartImage}
                    alt="add to cart"
                  />
                </button>
              </Tooltip>
            </div>
          );
        })}

        {/* {Object.keys(Shoes).map((keyName, index) => {
          const shoe = Shoes[keyName];
          return (
            <Shoe 
            shoe={shoe} 
            key={index} 
            keyName={keyName} 
            index={index} 
              
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Product;
