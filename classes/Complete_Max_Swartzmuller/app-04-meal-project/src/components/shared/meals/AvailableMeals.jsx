import { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.scss'

function AvailableMeals (props) {
  const [mealsList, setMealsList] = useState([])

  useEffect(() => {
    const identifier = setTimeout(() => {

      if (mealsList.length === 0) {
        setMealsList([... mealsList, 
          {
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
      {mealsList.map((m, i) => <div key={i}>{m.title}</div>)}
    </section>

  )
}

export default AvailableMeals