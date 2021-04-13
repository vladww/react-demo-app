import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { Textarea } from '../common/FormControls/FormControls'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newMessageBody'}
          // className={s.textarea} //потом узнать, куда его. Может и зедсь оставить можно
          placeholder={'Введите сообщение'}
          validate={[required, maxLength50]}
        />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}
const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} userid={d.id} name={d.name} />)
  let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} />)

  let sendMessage = () => {
    props.sendMessage()
  }

  let onMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }
  
  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <AddMessageReduxForm onSubmit={addNewMessage} /> {/*  надо будет, наверное, убрать это из этого div */}
      </div>
    </div>
  )
}

export default Dialogs

// посмотреть, надо ли убрать первый класс у активного диалога?