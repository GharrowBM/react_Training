import { Link } from 'react-router-dom'
import classes from './Dog.module.scss'

function Dog (props) {
  return <li className={classes['dog-item']}>
    <div className={classes.picture}>
      <img src={props.dog.pictureURL} alt="Dog picture" />
    </div>
    <div className={classes.details}>
    <h3>{props.dog.name}</h3>
    <span>{props.dog.breed}</span>
    <span>{props.dog.age}</span>
    </div>
    <div className={classes.actions}>
      <Link to={'/dogs/details/' + props.dog.id + '?mode=details'}>Details</Link>
      <Link to={'/dogs/edit/' + props.dog.id + '?mode=edit'}>Edit</Link>
      <Link to={'/dogs/delete/' + props.dog.id + '?mode=delete'}>Delete</Link>
    </div>
  </li>
}

export default Dog