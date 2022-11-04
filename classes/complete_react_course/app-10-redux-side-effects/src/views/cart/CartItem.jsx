import { useDispatch } from "react-redux";
import classes from "./CartItem.module.scss";
import { addToCart, removeFromCart } from './store/cartSlice'

function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.title}</h2>
        <div className={classes.amount}>
          Amount:
          <span>x {props.item.amount}</span>
        </div>
      </div>
      <div>
        <span>${props.item.price.toFixed(2)}</span>
        <div className={classes.actions}>
          <button onClick={() => dispatch(removeFromCart(props.item.id))}>-</button>
          <button onClick={() => dispatch(addToCart(props.item))}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
