import React from 'react'
// import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import s from '../common/FormControls/FormControls.module.css'

// const FormControl = ({input, meta, child, ...props}) => {
//   const hasError = meta.touched && meta.error

//   return (
//     <div className={s.formControl + ' ' + (hasError && s.error)}>
//       <div>
//         { props.child }
//       </div>
//       { hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'email'}
          component={Input}
          validate={[required]}
          placeholder={'Email'}
        />
      </div>
      <div>
        <Field
          name={'password'}
          component={Input}
          validate={[required]}
          placeholder={'Password'}
          type={'password'}
        />
      </div>
      <div>
        <Field
          name={'rememberMe'}
          type={'checkbox'}
          component={'input'}
        /> Remember me
      </div>
      { props.error &&
        <div className={s.formSummaryError}>
          {props.error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
  // console.log('PROPS', props)
  const onSubmit = (formData) => {
    console.log('formData', formData)
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if(props.isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)