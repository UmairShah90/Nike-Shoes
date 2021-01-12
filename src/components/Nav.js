import React, {useState} from "react";
import shoeImage from "../images/shoe-logo.png";
import nikeLogo from "../images/nike.svg"
import cartImage from "../images/shopping-cart.svg"
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import { useSelector } from "react-redux";
import { selectTotalItems } from "./../Store";
import "../App.css";

function Nav() {

   const [homeState, setHomeState] = useState("hvr-underline-from-center nav-link active");
   const [aboutState, setAboutState] = useState("hvr-underline-from-center nav-link");
   const [productState, setProductState] = useState("hvr-underline-from-center nav-link"); 
   const [cartState, setCartState] = useState("hvr-underline-from-center nav-link");

   // Functions
  // Home
  const setHome = () => {
    setHomeState("hvr-underline-from-center nav-link active");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("hvr-underline-from-center nav-link");
  };

  // About
  const setAbout = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link active");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("hvr-underline-from-center nav-link");
  };

  // Product
  const setProduct = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link active");
    setCartState("hvr-underline-from-center nav-link");
  };

  // Cart
  const setTheCart = () => {
    setHomeState("hvr-underline-from-center nav-link");
    setAboutState("hvr-underline-from-center nav-link");
    setProductState("hvr-underline-from-center nav-link");
    setCartState("hvr-underline-from-center nav-link active");
  };

   // Total
   let totalItems = useSelector(selectTotalItems);

  return (
    <div>
      <h1 className="nike-shoes">
        Nike Shoes Store
        <span>
          <img className="logo" src={shoeImage} alt="Shoe logo" />
        </span>
      </h1>

      <div className="nav-container">
        <nav>
          <h2>
          <img src={nikeLogo} alt="Nike logo" className="nike-logo"/>
            <Link className={homeState} to="/">
              {" "}
              Home{" "}
            </Link>
            <Link className={aboutState} to="/about">
              {" "}
              About{" "}
            </Link>

            <Link className={productState} to="/product">
              {" "}
              Products{" "}
            </Link>
 
            <Badge badgeContent={totalItems} color="primary">
            <Link to="/cart" className={cartState} onClick={setTheCart}>
            {" "}
            <img 
            src={cartImage} 
            alt="CartImage"
            className="nav-cart"
            title="Add to Cart"
            
            />{" "}
            </Link>

            </Badge>
            
          </h2>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
