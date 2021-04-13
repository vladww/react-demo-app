import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

// export default withAuthRedirect(connect(mapStateToProps, {
//   sendMessage,
//   updateNewMessageBody
// })(Dialogs))

export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs)
