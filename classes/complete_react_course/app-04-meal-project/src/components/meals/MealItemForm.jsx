import { useRef } from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.scss'

function MealItemForm ({mealId, onAddToCart}) {
  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault() 
    onAddToCart(+amountInputRef.current.value)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label='Amount' input={{id: 'amount-' + mealId, type:'number', min:'1', max:'5', step:'1', defaultValue:'1'}}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm