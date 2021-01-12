import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/ProductSlice";
import variablesSlice from "./Slices/variablesSlice";


const store = configureStore({
  reducer: { cart: productSlice.reducer,variables: variablesSlice.reducer },
});

// Select Products
export const selectProducts = (state) => state.cart;

// Select Variable totalItems
export const selectTotalItems = (state) => state.variables.totalItems;

export const selectTotalAmount = (state) => state.variables.totalAmount;

export const { setTotalItems, setTotalAmount } = variablesSlice.actions;

export const { add, remove, emptyCart } = productSlice.actions;

export { store, productSlice, variablesSlice };
