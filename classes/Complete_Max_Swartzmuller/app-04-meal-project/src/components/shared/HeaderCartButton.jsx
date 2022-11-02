import classes from './HeaderCartButton.module.scss'
import ShoppingcartSVG from '../../assets/shopping_cart.svg'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const ctx = useContext(CartContext)

  const nbOfCartItems = ctx.items.reduce((currentNb, item) => {
    return currentNb + item.amount
  }, 0)

  return (
    <button className={classes['cart-button']} onClick={props.onClick}>
      <img src={ShoppingcartSVG} alt="Shopping Cart Icon" />
      <span>Cart</span>
      <span>{nbOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton