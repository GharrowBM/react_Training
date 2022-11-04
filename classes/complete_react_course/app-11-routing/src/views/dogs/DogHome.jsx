import { useEffect } from 'react'
import Dog from '../../components/Dog'
import classes from './DogHome.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadDogsData } from './dogSlice'

function DogHome() {
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.dogState.dogs)
  const error = useSelector(state => state.dogState.error)
  console.log(error);

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(loadDogsData())
    }, 50)

    return () => {
      clearTimeout(identifier)
    }
  }, [])

  return <div className={classes.main}>
    <div>
    <h1>Dog List</h1>
  <Link to={'/dogs/add'}>Add</Link>
    </div>
    {error ? <p>{error}</p> : null }
  <ul>
    {dogs.map(d => <Dog dog={d} key={d.id}/>)}
  </ul>
  </div>
}

export default DogHome