import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.scss";
import { increment, decrement } from "./store/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className={classes.wrapper}>
      <h2>Redux Counter</h2>
      <div className={classes.counter}>
          <span>{count}</span>
        <div className={classes.actions}>
          <button onClick={() => dispatch(decrement())} disabled={count < 1}>
            -
          </button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
