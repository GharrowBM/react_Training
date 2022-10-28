import { useEffect, useState } from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.scss'
import MealItem from './MealItem'

function AvailableMeals (props) {
  const [mealsList, setMealsList] = useState([])

  useEffect(() => {
    const identifier = setTimeout(() => {

      if (mealsList.length === 0) {
        setMealsList([... mealsList, 
          {
            id: 1,
            title: 'Burrito',
            description: 'Description of Burrito',
            price: 18.99
        },
      ])
      }
    }, 500)

    return () => {
      clearTimeout(identifier)
    }

  }, [])

  return (
    <section>
      <Card>
      <ul>
      {mealsList.map((m) => <MealItem key={m.id} meal={m} />)}
        </ul>
      </Card>
    </section>

  )
}

export default AvailableMeals