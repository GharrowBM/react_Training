import MasterForm from "../../components/MasterForm"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function MasterEdit() {
  const { masterId } = useParams()
  const masters = useSelector(state => state.masterState.masters)
  const masterSelected = masters.find(d => d.id === masterId)

return <>
<MasterForm master={masterSelected} mode='edit'/>
</>
}

export default MasterEdit