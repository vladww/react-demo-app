import React from 'react'
import styles from './Message.module.css'


const Message = (props) => {
  return <div>{props.message}</div>
}

export default Message

// посмотреть, надо ли убрать первый класс у активного диалога?