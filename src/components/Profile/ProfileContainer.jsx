import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Profile from './Profile'
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = this.props.authorizedId     //у меня и без этой штуки всё работает
      if(!userId) {                        //говорил, что это ему не нравится, но хочет показать, что так можно
        this.props.history.push('/login')  //у меня и без этого всё работает
      }
    }

    this.props.getUserProfile(userId)
    // setTimeout(() => {
    this.props.getUserStatus(this.props.match.params.userId)  
    // }, 1000)
  }

  render() {
    // console.log('render')
    return (
      <Profile
        {...this.props}  //не много ли информации получает следующая компонента?
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  // console.log('mapStateToProps')
  return {
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedId: state.auth.userId,
  isAuth: state.auth.isAuth
}}


// export default connect(mapStateToProps, { getUserProfile })(withRouter(withAuthRedirect(ProfileContainer)))
// export default withAuthRedirect(withRouter(connect(mapStateToProps, { getUserProfile })(ProfileContainer)))
// export default withRouter(withAuthRedirect(connect(mapStateToProps, { getUserProfile })(ProfileContainer)))

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)