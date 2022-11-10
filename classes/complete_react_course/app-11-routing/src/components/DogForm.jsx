import classes from './DogForm.module.scss'
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'


const BASE_FIREBASE_URL = 'https://fir-react-kennel-redux-default-rtdb.europe-west1.firebasedatabase.app/'

function DogForm(props) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode') ?? 'add'

  const [dogName, setDogName] = useState({value: props.dog?.name ?? '', isValid: !!props.dog, isTouched: !!props.dog})
  const [dogBreed, setDogBreed] = useState({value: props.dog?.breed ?? '', isValid: !!props.dog, isTouched: !!props.dog})
  const [dogAge, setDogAge] = useState({value: props.dog?.age ?? 1, isValid: !!props.dog, isTouched: !!props.dog})
  const [dogPictureURL, setDogPictureURL] = useState({value: props.dog?.pictureURL ?? '', isValid: !!props.dog, isTouched: !!props.dog})
  const [formValid, setFormValid] = useState(false)

  const submitFormHandler = async (e) => {
    e.preventDefault()
    
    switch (mode) {
      case 'add':
        await axios.post(BASE_FIREBASE_URL + 'dogs.json', {name: dogName.value, breed: dogBreed.value, age: dogAge.value, pictureURL: dogPictureURL.value})
        break;

        case 'edit':
          await axios.patch(BASE_FIREBASE_URL + `dogs/${props.dog.id}.json`, {name: dogName.value, breed: dogBreed.value, age: dogAge.value, pictureURL: dogPictureURL.value})
          break;
          
          case 'delete':
            await axios.delete(BASE_FIREBASE_URL + `dogs/${props.dog.id}.json`)
            break;

      default:
        break;
    }

    navigate('/dogs')
  }

  const checkFormValidity = () => {
    setFormValid(dogName.isTouched && dogName.isValid && 
      dogAge.isTouched && dogAge.isValid && 
      dogBreed.isTouched && dogBreed.isValid && 
      dogPictureURL.isTouched && dogPictureURL.isValid)
  }

  const changeDogNameHandler = (e) => {
    setDogName({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  const changeDogBreedHandler = (e) => {
    setDogBreed({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  const changeDogAgeHandler = (e) => {
    setDogAge({
      value: +e.target.value,
      isTouched: true,
      isValid: +e.target.value !== 0
    })
  }

  const changeDogPictureURLHandler = (e) => {
    setDogPictureURL({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  useEffect(() => {
    checkFormValidity()
  }, [dogName, dogAge, dogBreed, dogPictureURL])

  const isReadOnly = mode === 'delete' || mode === 'details'
  const buttonText = mode === 'edit' ? 'Edit' : mode === 'add' ? 'Add' : mode === 'delete' ? 'Delete' : 'Back'

  return <form onSubmit={submitFormHandler} className={classes.form}>
    <h3>{props.formTitle}</h3>
    <div className={classes['form-item']}>
      <label htmlFor="name">Name:</label>
      <input type="text" id='name' name='name' value={dogName.value} onChange={changeDogNameHandler} readOnly={isReadOnly}/>
    </div>
    <div className={classes['form-item']}>
      <label htmlFor="breed">Breed:</label>
      <input type="text" id='breed' name='breed' value={dogBreed.value} onChange={changeDogBreedHandler} readOnly={isReadOnly}/>
    </div>
    <div className={classes['form-item']}>
      <label htmlFor="age">Age:</label>
      <input type="number" id='age' name='age' value={dogAge.value} onChange={changeDogAgeHandler} readOnly={isReadOnly}/>
    </div>
    <div className={classes['form-item']}>
      <label htmlFor="pictureURL">Picture:</label>
      <input type="text" id='pictureURL' name='pictureURL' value={dogPictureURL.value} onChange={changeDogPictureURLHandler} readOnly={isReadOnly}/>
    </div>
    <div className={classes.actions}>
      <button disabled={!formValid}>{buttonText}</button>
    </div>
  </form>
}

export default DogForm