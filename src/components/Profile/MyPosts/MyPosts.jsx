import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormControls/FormControls'

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={'newPostBody'}
          placeholder={'Введите сообщение'}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const MyPostsReduxForm = reduxForm({form: 'myPosts'})(MyPostsForm)

window.props = []
const MyPosts = React.memo( (props) => {

  // componentDidMount() {
  //   setTimeout(() => {
  //     setState({a: 12})
  //   }, 3000)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != props || nextState != state
  // }

  console.log(props)
  window.props.push(props)
  let postsElements = [...props.profilePage.posts].reverse().map( p => <Post key={p.id} name={p.name} age={p.age} message={p.message} likesCount={p.likesCount} />)
  
  let addNewPost = (formData) => {
    props.addPost(formData.newPostBody)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
})

export default MyPosts