import React, { useEffect, useState } from 'react'


const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    // console.log('useEffect')
    setStatus(props.status)
  }, [props.status] ) // - Без массива в конце: вызывай этот метод после каждой новой отрисовки компоненты
                      // - С пустым массивом: вызывай этот метод только после первой отрисовки компоненты,
                      //   а при изменении не надо его выполянть (не рекомендуется так делать, так как могут
                      //   меняться неожиданные свойства, о которых ты и не подозревал - и метод будет выполняться)
                      // - С пропсами в массиве: вызывай этот метод при первой отрисовке,
                      //   а также тогда, когда пропсы изменятся

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange =(e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      { !editMode
      ? <div>
          <span onClick={activateEditMode}>{ props.status || '------------'}</span>
        </div>
      : <div>
          <input onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true} value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks