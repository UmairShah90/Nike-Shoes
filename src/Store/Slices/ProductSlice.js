import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../../Store/States/ProductState";

const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {
    // Actions
    //Add Product
    add: (state, action) => {
      return state.map((productItem) => {
        // Find the item
        if (productItem.id !== action.payload.id) {
          return productItem;
        }
        // Add it to the cart
        return {
          ...productItem,
          added: true,
          quantity: productItem.quantity + 1,
        };
      });
    },
  // remove  
  remove: (state, action) => {
      return state.map((productItem) => {
        if (productItem.id !== action.payload.id) {
            return productItem;
          }
        // remove it to the cart
        return {
            ...productItem,
            added: false,
            quantity: productItem.quantity * 0
        }  
      })
  },  
    // Empty Cart
    emptyCart: (state, action) => {
        return state.map((item) => {
          return {
            ...item,
            added: false,
            quantity: item.quantity * 0,
          };
        });
      },
  },
});

export default productSlice;
