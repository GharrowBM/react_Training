import classes from './HeaderCartButton.module.scss'
import ShoppingcartSVG from '../../assets/shopping_cart.svg'

function HeaderCartButton(props) {
  return (
    <button className={classes['cart-button']}>
      <img src={ShoppingcartSVG} alt="Shopping Cart Icon" />
      <span>Cart</span>
      <span>1</span>
    </button>
  )
}

export default HeaderCartButton