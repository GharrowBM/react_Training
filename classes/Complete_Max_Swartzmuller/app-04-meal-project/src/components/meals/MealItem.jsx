import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

function MealItem({ meal }) {
  const ctx = useContext(CartContext)

  const addToCartHandler = amount => {
    ctx.addItem({...meal, amount})
  }

  return (
    <li className={classes['meal-item']}>
      <div>
        <h3>{meal.title}</h3>
        <div>{meal.description}</div>
        <div>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm mealId={meal.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;
