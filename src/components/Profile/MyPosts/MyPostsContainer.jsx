import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}


export default connect(mapStateToProps, {addPost})(MyPosts)