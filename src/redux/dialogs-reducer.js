const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
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
  ]
}


const dialogsReducer = (state = initialState, action) => {
  
  switch(action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messages:[...state.messages, {id: 7, message: action.newMessageBody}]
      }
      
    default:
      return state
  }
}


export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer