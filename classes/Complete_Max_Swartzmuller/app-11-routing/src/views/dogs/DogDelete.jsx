import DogForm from "../../components/DogForm"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function DogDelete() {
  const { dogId } = useParams()
  const dogs = useSelector(state => state.dogState.dogs)
  const dogSelected = dogs.find(d => d.id === dogId)

  return <>
  <DogForm dog={dogSelected} mode='delete' />
  </>
}

export default DogDelete