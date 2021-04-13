import React from 'react'
import { connect } from 'react-redux'
import { followSuccess, unfollowSuccess, setCurrentPage,
  setFollowingProgress, requestUsers, follow, unfollow } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'


class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChange = (pageNumber) => {
    const {pageSize} = this.props
    this.props.requestUsers(pageNumber, pageSize)

    // this.props.setCurrentPage(pageNumber)
    // this.props.setIsFetching(true)

    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.setIsFetching(false)
    //   this.props.setUsers(data.items)
    // })
  }


  render() {
    return <>
      { this.props.isFetching && <Preloader />}
      <Paginator
        itemsTotalCount={this.props.usersTotalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        portionSize={10}
        
        onPageChange={this.onPageChange}
      />
      { this.props.users.map(u =>
      <Users key={u.id}
        user={u}
        followingInProgress={this.props.followingInProgress}

        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setFollowingProgress={this.props.setFollowingProgress}
      />
      )}
    </>
  }
}

// для чего тело функции в скобках? Это значит - веруть объект, который находится в скобках
// если их убрать - это будет просто тело функции
const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  usersTotalCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
})


// export default withAuthRedirect(connect(mapStateToProps, {
//   followSuccess,
//   unfollowSuccess,
//   setCurrentPage,
//   setFollowingProgress,
//   getUsers,
//   follow,
//   unfollow,
// })(UsersContainer))

export default compose(
  connect(mapStateToProps,
  {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    setFollowingProgress,
    requestUsers,
    follow,
    unfollow,
  }),
  // withAuthRedirect
)(UsersContainer)