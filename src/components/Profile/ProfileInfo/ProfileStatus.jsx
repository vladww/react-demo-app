import React from 'react'


class ProfileStatus extends React.Component{

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({   //а эта функция автоматически делает апдейт, (?но после выполнения этой функции)
      editMode: true
    })
    // this.state.editMode = true
    // this.forceUpdate() //очень не рекомендуется использовать
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange= (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  //можно поизучать, что происходит с параметрами в этой функции из дебага
  // componentDidUpdate(prevProps, prevState) {
  //   debugger
  //   let a = this.state
  //   let b = this.props
  //   console.log('componentDidUpdate')
  // }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      // console.log('if')
      this.setState({
        status: this.props.status
      })
    }
    // console.log('componentDidUpdate')
  }

  render() {
    // console.log('render')
    return (
      <div>
        { !this.state.editMode
        ? <div>
            {/* <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span> */}
            <span onClick={this.activateEditMode}>{this.props.status || '------------'}</span>
          </div>
        : <div>
            <input onBlur={this.deactivateEditMode} onChange={this.onStatusChange} autoFocus={true} value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus