import Header from "./components/shared/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false)

  const showCartHandler = () => {
    setCartVisible(true)
  }

  const hideCartHandler = () => {
    setCartVisible(false)
  }

  return (
    <CartProvider>
    {cartVisible ? <Cart onClose={hideCartHandler}/> : null}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
