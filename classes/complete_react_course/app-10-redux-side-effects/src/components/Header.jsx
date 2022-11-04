import classes from './Header.module.scss'
import ShoppingCart from '../assets/shopping-cart.svg'
import { useDispatch, useSelector } from 'react-redux'
import CartSummary from '../views/cart/CartSummary'
import { showCart, loadCartData } from '../views/cart/store/cartSlice'
import { useEffect } from 'react'

function Header () {
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  let nbOfItems = 0
  
  for (const item of cartState.content) {
    nbOfItems += item.amount
  }
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(loadCartData())
    }, 50)

    return () => {
      clearTimeout(identifier)
    }
  }, [])

  return <header className={classes.header}>
    {cartState.isVisible && <CartSummary />}
    <h2>BooksStore</h2>
    <button onClick={() => dispatch(showCart())}>
      <img src={ShoppingCart} alt="Cart Icon" />
      Your Cart
      <span>{nbOfItems}</span>
    </button>
  </header>
}

export default Header