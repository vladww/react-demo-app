import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

//этот вариант стандартный, а ниже - подключается плагин redux tools для браузера
// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))



window.__store__ = store

export default store