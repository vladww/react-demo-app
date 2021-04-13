import { getAuthUserData } from './auth-reducer'

const INITIALIZING_SUCCEEDED = 'INITIALIZING_SUCCEEDED'

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZING_SUCCEEDED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const initializingSucceeded = () => ({type: INITIALIZING_SUCCEEDED})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  // promise.then( () => {
  //   dispatch(initializingSucceeded())
  // })
  Promise.all([promise]).then( () => {   //так можно выполнять действия после выполнени всех промисов
    dispatch(initializingSucceeded())    //надо добавить другие промисы в массив с promise
  })
}

export default appReducer