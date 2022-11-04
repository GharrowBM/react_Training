import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./CartSummary.module.scss";
import { hideCart, saveCartData } from "./store/cartSlice";

const modalRoot = document.getElementById("modal-root");

function CartSummary(props) {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const saveCartHandler = () => {
    dispatch(saveCartData({
      content: cartState.content,
      totalAmount: cartState.totalAmount
    }))
  }

  return (
    <>
      {createPortal(
        <div
          className={classes["cart-summary"]}
        >
          <div>
            <h3>Cart Summary</h3>
            <ul>
              {!cartState.content.length ? <p>No items to cart yet...</p> : cartState.content.map((cI, i) => (
                <CartItem key={i} item={cI} />
              ))}
            </ul>
            <div className={classes.actions}>
              {cartState.content.length ? <button onClick={saveCartHandler}>Save Cart</button> : null}
              <button onClick={() => dispatch(hideCart())}>Close</button>
            </div>
          </div>
        </div>,
        modalRoot
      )}
    </>
  );
}

export default CartSummary;
