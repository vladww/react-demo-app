import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
  posts: [
    {id: 1, name:'Dima', age:'30', message:'Hi, how are you?', likesCount:'4'},
    {id: 2, name:'Vova', age:'32', message:'It\'s a nice thing!', likesCount:'15'},
    {id: 3, name:'Alex V.', age:'18', message:'Hello friend!', likesCount:'1'},
    {id: 4, name:'Nikolay S.', age:'21', message:'Wow, cool!', likesCount:'23'},
    {id: 5, name:'Semyon Popov', age:'45', message:'Hi!', likesCount:'110'},
  ],
  profile: null,
  status: ''
}


const profileReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 6, name: 'Daniel', message: action.newPostBody, likesCount: 0}]
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
        }

    default:
      return state

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
  }
}


export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then( response => dispatch(setUserProfile(response.data)) )
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then( response => dispatch(setUserStatus(response.data)) )
}

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then( response => {
    if(response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  })
}

export default profileReducer