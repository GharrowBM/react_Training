import classes from './MasterForm.module.scss'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_FIREBASE_URL = 'https://fir-react-kennel-redux-default-rtdb.europe-west1.firebasedatabase.app/'

function MasterForm (props) {
  const navigate = useNavigate()

  const [masterFName, setMasterFName] = useState({value: props.master?.firstname ?? '', isValid: !!props.master, isTouched: !!props.master})
  const [masterLName, setMasterLName] = useState({value: props.master?.lastname ?? '', isValid: !!props.master, isTouched: !!props.master})
  const [masterEmail, setMasterEmail] = useState({value: props.master?.email ?? '', isValid: !!props.master, isTouched: !!props.master})
  const [masterPhone, setMasterPhone] = useState({value: props.master?.phone ?? '', isValid: !!props.master, isTouched: !!props.master})
  const [formValid, setFormValid] = useState(false)

  const submitFormHandler = async (e) => {
    e.preventDefault()
    
    switch (props.mode) {
      case 'add':
        await axios.post(BASE_FIREBASE_URL + 'masters.json', {firstname: masterFName.value, lastname: masterLName.value, email: masterEmail.value, phone: masterPhone.value})
        break;

        case 'edit':
          await axios.patch(BASE_FIREBASE_URL + `masters/${props.master.id}.json`, {firstname: masterFName.value, lastname: masterLName.value, email: masterEmail.value, phone: masterPhone.value})
          break;
          
          case 'delete':
            await axios.delete(BASE_FIREBASE_URL + `masters/${props.master.id}.json`)
            break;

      default:
        break;
    }

    navigate('/masters')
  }

  const checkFormValidity = () => {
    setFormValid(masterFName.isTouched && masterFName.isValid && 
      masterLName.isTouched && masterLName.isValid && 
      masterEmail.isTouched && masterEmail.isValid && 
      masterPhone.isTouched && masterPhone.isValid)
  }

  const changemasterFNameHandler = (e) => {
    setMasterFName({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  const changeMasterLNameHandler = (e) => {
    setMasterLName({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  const changeMasterEmailHandler = (e) => {
    setMasterEmail({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  const changeDogMasterPhoneHandler = (e) => {
    setMasterPhone({
      value: e.target.value,
      isTouched: true,
      isValid: e.target.value !== ''
    })
  }

  useEffect(() => {
    checkFormValidity()
  }, [masterFName, masterLName, masterEmail, masterPhone])

  const isReadOnly = props.mode === 'delete' || props.mode === 'details'
  const buttonText = props.mode === 'edit' ? 'Edit' : props.mode === 'add' ? 'Add' : props.mode === 'delete' ? 'Delete' : 'Back'

  return  <form onSubmit={submitFormHandler} className={classes.form}>
  <h3>{props.formTitle}</h3>
  <div className={classes['form-item']}>
    <label htmlFor="firstname">Firstname:</label>
    <input type="text" id='firstname' name='firstname' value={masterFName.value} onChange={changemasterFNameHandler} readOnly={isReadOnly}/>
  </div>
  <div className={classes['form-item']}>
    <label htmlFor="lastname">Lastname:</label>
    <input type="text" id='lastname' name='lastname' value={masterLName.value} onChange={changeMasterLNameHandler} readOnly={isReadOnly}/>
  </div>
  <div className={classes['form-item']}>
    <label htmlFor="email">Email:</label>
    <input type="email" id='email' name='email' value={masterEmail.value} onChange={changeMasterEmailHandler} readOnly={isReadOnly}/>
  </div>
  <div className={classes['form-item']}>
    <label htmlFor="phone">Phone:</label>
    <input type="text" id='phone' name='phone' value={masterPhone.value} onChange={changeDogMasterPhoneHandler} readOnly={isReadOnly}/>
  </div>
  <div className={classes.actions}>
    <button disabled={!formValid}>{buttonText}</button>
  </div>
</form>
}

export default MasterForm