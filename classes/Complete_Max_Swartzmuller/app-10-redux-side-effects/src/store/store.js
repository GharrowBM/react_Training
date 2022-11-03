import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../views/books/store/bookSlice";
import cartReducer from "../views/cart/store/cartSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer
  }
})

export default store