import { useEffect } from 'react'
import classes from './MasterHome.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadMastersData } from './masterSlice'
import Master from '../../components/Master'

function MasterHome () {
  const dispatch = useDispatch()
  const masters = useSelector(state => state.masterState.masters)
  const error = useSelector(state => state.masterState.error)

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(loadMastersData())
    }, 50)

    return () => {
      clearTimeout(identifier)
    }
  }, [])

  return <div className={classes.main}>
    <div>
    <h1>Masters List</h1>
  <Link to={'/masters/add'}>Add</Link>
    </div>
      {error ? <div className={classes.error}>{error}</div> : null}
  <ul>
    {masters.map(m => <Master master={m} key={m.id}/>)}
  </ul>
  </div>
}

export default MasterHome