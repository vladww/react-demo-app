import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogItem.module.css'


const DialogItem = (props) => {
  let path = `/dialogs/${props.userid}`

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path} activeClassName={s.active}>
        <img
          src='https://wallbox.ru/resize/800x480/wallpapers/main/201313/be283e0c3b9a67b.jpg'
          alt='wallbox'
        />
        <p>{props.name}</p>
      </NavLink>
    </div>
  )
}

export default DialogItem

// посмотреть, надо ли убрать первый класс у активного диалога?