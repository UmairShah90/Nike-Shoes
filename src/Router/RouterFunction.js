import React from "react";
import Nav from "../components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Product from "../components/Product";
import Cart from "../components/Cart";
import ProductItem from "../components/ProductItem";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductItem} />

          <Route path="*" component={() => <h2>404 Not Found </h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterFunction;
