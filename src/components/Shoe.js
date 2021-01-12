import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import cartImage from "../images/shopping-cart.svg";
import { CartContext } from "../CartContext";
import "../App.css";

function Shoe({ shoe, keyName }) {

  const [cart, setCart] = useContext(CartContext);
  
  const addToCart = (shoeProduct) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => shoeProduct.name === item.name);
    // Condition
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...shoeProduct,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    // ...

    setCart(newCart);
  };
  return (
    <div className="hvr-grow products">
      <h3 className="shoe-name">{shoe.name}</h3>
      <h2 className="shoe-price">{shoe.price}</h2>
      <Link key={keyName} to={`/product/${keyName}`}>
        <img
          className="products-shoe-image"
          src={shoe.img}
          alt={shoe.name}
          title={shoe.name}
        />
      </Link>
      <br />
      <Tooltip title="Add to Cart" aria-label="add to cart">
        <button onClick={() => addToCart(shoe)} className="cart-button">
          <img src={cartImage} alt="cart" className="cart-image" />
        </button>
      </Tooltip>
    </div>
  );
}

export default Shoe;
