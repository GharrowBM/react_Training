import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart(props) {

  const ctx = useContext(CartContext)

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
  const hasItems = ctx.items.length > 0

  const cartItemAddHandler = (item) => {
    ctx.addItem({...item, amount: 1})
  }

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  }

  const cartItems = (
    <ul>
      {ctx.items.map((i) => (
        <CartItem key={i.id} item={{...i}} onAdd={cartItemAddHandler.bind(null, i)} onRemove={cartItemRemoveHandler.bind(null, i.id)} />
      ))}
    </ul>
  );

  return (
    <Modal onOverlayClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
      <span>Total Amount:</span>
      <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        {hasItems ? <button>Order</button> : null}
      </div>
    </Modal>
  );
}

export default Cart;
