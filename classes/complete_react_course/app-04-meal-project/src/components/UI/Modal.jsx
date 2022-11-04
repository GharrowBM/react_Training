import { createPortal } from 'react-dom'
import classes from './Modal.module.scss'

function Backdrop (props) {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

function ModalOverlay (props) {
  return (
    <div className={classes.modal} onClick={props.onClick}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
}

const postalElement = document.getElementById('modal-root')

function Modal (props) {
  return (<>
  {createPortal(<Backdrop onClick={props.onOverlayClick}/>, postalElement)}
  {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, postalElement)}
  </>)
}

export default Modal