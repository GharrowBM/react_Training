import classes from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

function MealItem({ meal }) {
  return (
    <li className={classes['meal-item']}>
      <div>
        <h3>{meal.title}</h3>
        <div>{meal.description}</div>
        <div>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}

export default MealItem;
