import { useParams } from "react-router-dom"
import MasterForm from "../../components/MasterForm"
import { useSelector } from 'react-redux'

function MasterDetail() {
  const { masterId } = useParams()
  const masters = useSelector(state => state.masterState.masters)
  const masterSelected = masters.find(d => d.id === masterId)

  return <>
  <MasterForm master={masterSelected} mode='details' />
  </>
}

export default MasterDetail