import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IN_FOLLOWING_PROGRESS = 'SET_IN_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})

        // users: state.users.map( u => (u.id === action.userId) ? {...u, followed: true} : u )
        
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true }
        //   }
        //   return u
        // })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
        // users: [...state.users, ...action.users] //это чтобы подгружать юзеров в конец списка
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.usersTotalCount
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id != action.userId)
      }

    default:
      return state
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (usersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })
export const setFollowingProgress = (isFetching, userId) => ({ type: SET_IN_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true))
  dispatch(setCurrentPage(page))

  let data = await usersAPI.getUsers(page, pageSize)

  dispatch(setIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setUsersTotalCount(data.totalCount))
}


export const follow = (userId) => async (dispatch) => {
  dispatch(setFollowingProgress(true, userId))
  let data = await usersAPI.followUser(userId)

  if(data.resultCode == 0) {
    dispatch(followSuccess(userId))
  }
  dispatch(setFollowingProgress(false, userId))
}


export const unfollow = (userId) => async (dispatch) => {
  dispatch(setFollowingProgress(true, userId))
  let data = await usersAPI.unfollowUser(userId)

  if(data.resultCode == 0) {
    dispatch(unfollowSuccess(userId))
  }
  dispatch(setFollowingProgress(false, userId))
}



export default usersReducer