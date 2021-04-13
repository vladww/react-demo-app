import React from 'react'
import s from './Post.module.css'


const Post = (props) => {

  // console.log(props)
  // debugger

  return (
    <div className={s.item}>
      <div className={s.postImg}>
        <img 
          src='https://wallbox.ru/resize/800x480/wallpapers/main/201313/be283e0c3b9a67b.jpg'
          alt='wallbox'
        />
      </div>
      <div className={s.message}>
        <div className={s.postTop}>{props.name}, {props.age}</div>
        <div>{props.message}</div>
      </div>
      <div className={s.postFooter}>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post