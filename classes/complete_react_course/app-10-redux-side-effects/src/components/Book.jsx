import { useDispatch } from 'react-redux'
import classes from './Book.module.scss'
import { addToCart } from '../views/cart/store/cartSlice'

function Book (props) {
  const dispatch = useDispatch()

  return <div className={classes.book}>
    <div>
      <h2>{props.book.title}</h2>
      <p>{props.book.description}</p>
    </div>
    <div>
      <span>${props.book.price.toFixed(2)}</span>
      <button onClick={() => dispatch(addToCart(props.book))}>Add to Cart</button>
    </div>
  </div>
}

export default Book