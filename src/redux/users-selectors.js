import { createSelector } from 'reselect'

const getUsersSelector = (state) => {
  return state.usersPage.users
}

//в данном случае, делает то же, что и getUsers, но при изменении данных state, не относящихся
//к компоненте с этими данными, не вызывает её перерисовку
//также, она зависит от getUsers
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users
})

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.usersTotalCount
}

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}
