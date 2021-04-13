import React from 'react'
import s from './FormControls.module.css'

//вообще, всё, что здесь происходит, я ещё не до конца понял
//более понятный варинат того же - в конце файла закомментирован

export const FormControl = (props) => {
  // console.log('props2: ', props)
  // console.log('======================================')
  const hasError = props.touched && props.error

  return (
    <div className={s.formControl + ' ' + (hasError && s.error)}>
      <div>
        { props.children }
      </div>
      { hasError && <span>{props.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...meta}><input {...input} {...restProps} /></FormControl>
}

// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error

//   return (
//     <div className={s.formControl + ' ' + (hasError && s.error)}>
//       <div>
//         <textarea {...input} {...props} />  
//       </div>
//       { hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }

// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error

//   return (
//     <div className={s.formControl + ' ' + (hasError && s.error)}>
//       <div>
//         <input {...input} {...props} />  
//       </div>
//       { hasError && <span>{meta.error}</span>}
//     </div>
//   )
// }