import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'


let store = {
  _state: {
    profilePage: {
      posts: [
        {name:'Dima', age:'30', message:'Hi, how are you?', likesCount:'4'},
        {name:'Vova', age:'32', message:'It\'s a nice thing!', likesCount:'15'},
        {name:'Alex V.', age:'18', message:'Hello friend!', likesCount:'1'},
        {name:'Nikolay S.', age:'21', message:'Wow, cool!', likesCount:'23'},
        {name:'Semyon Popov', age:'45', message:'Hi!', likesCount:'110'},
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: '1', name: 'Vladimir' },
        { id: '2', name: 'Petr' },
        { id: '3', name: 'Ivan' },
        { id: '4', name: 'Semyon' },
        { id: '5', name: 'John' },
        { id: '6', name: 'James' },
      ],
      messages: [
        { id: '1', message: 'Hello friend!' },
        { id: '2', message: 'How are you doing?' },
        { id: '3', message: 'Everything is very good!' },
        { id: '4', message: ':)' },
        { id: '5', message: 'Hi, mate! How are you?' },
        { id: '6', message: 'OMG!' },
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _rerenderEntireTree() {},

  dispatch(action) {
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this)
  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}


//это для дебага
window.state = store._state


export default store