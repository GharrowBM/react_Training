import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MasterForm from '../../components/MasterForm'

function MasterDelete() {
  const { masterId } = useParams()
  const masters = useSelector(state => state.masterState.masters)
  const masterSelected = masters.find(m => m.id === masterId)

  return <>
  <MasterForm master={masterSelected}/>
  </>
}

export default MasterDelete