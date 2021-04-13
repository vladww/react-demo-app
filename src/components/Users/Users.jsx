import React from 'react'
import s from './Users.module.css'
import defaultUserPhoto from '../../assets/images/usersDefaultImg0.jpg'
import { NavLink } from 'react-router-dom'


const Users = ({user, ...props}) => {
  return <div>
        <div>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                {/* <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : ''} alt="userPic"/> */}
                <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : defaultUserPhoto} alt="userPic" />
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => props.unfollow(user.id)}
                  >Unfollow</button>
                : <button
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => props.follow(user.id)}
                  >Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}, {'u.location.country'}</div>
            </span>
          </span>
        </div>
  </div>
}

export default Users