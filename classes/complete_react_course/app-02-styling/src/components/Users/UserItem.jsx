import styles from './UserItem.module.css'

function UserItem({user}) {
  return (
    <div className={styles['user-item']}>
      <div>
        <div>{user.age}</div>
        <div>yo</div>
      </div>
      <p>{user.name}</p>
    </div>
  )
}

export default UserItem