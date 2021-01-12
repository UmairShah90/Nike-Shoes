import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  store,
  remove,
  emptyCart,
  selectProducts,
  selectTotalItems,
  setTotalItems,
  selectTotalAmount,
  setTotalAmount,
} from "../Store";
import CartVoucher from "./CartVoucher";
import "../App.css"

function Cart() {
  // Get total Items from store
  let totalItems = useSelector(selectTotalItems);
  // Get total Amount from store
  let totalAmount = useSelector(selectTotalAmount);
  // Get products from store
  const products = useSelector(selectProducts);
  // Filter Cart products
  const cartProducts = products.filter((product) => product.added);
  // Set total Items
  store.dispatch(setTotalItems(cartProducts.length));

  // Calculate Total Amount
  let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  // Use Effect
  useEffect(() => {
    store.dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  return (
    <div>
      <CartVoucher items={totalItems} amount={totalAmount} />
      {cartProducts.length > 0 && (
        <div>
          {" "}
          <button
            className="clear-cart-button"
            onClick={() => store.dispatch(emptyCart(products))}
          >
            Clear Cart
          </button>
          <h3 className="your-products">Your Products</h3>
        </div>
      )}
      <div className="cart-container">
        {products
          .filter((product) => product.added)
          .map((product) => {
            // variables
            let id = product.id;
            let title = product.title;
            let imageUrl = product.imageUrl;
            let price = product.price;
            let quantity = product.quantity;

            if (quantity > 0) {
              return (
                <div key={id} className="cart-products">
                  <h3 className="cart-shoe-name">{title} </h3>
                  <button
                    className="remove-btn hvr-grow"
                    onClick={() => store.dispatch(remove(product))}
                  >
                    {" "}
                    {/* <img
                      src={crossImage}
                      height={30}
                      alt="Remove"
                      title="Remove"
                    />{" "} */}
                  </button>
                  <br />
                  <h2 className="shoe-price-cart"> ${price} </h2>
                  

                  <img className="cart-shoe-image" alt={title} src={imageUrl} />
                </div>
              );
            } else {
              store.dispatch(remove(product));
              return null;
            }
          })}
      </div>
    </div>
  );
}
export default Cart;
