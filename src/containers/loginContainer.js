import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/userActions'

import Login from '../components/Login'


class LoginContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { userStore, userActionCreated } = this.props

    return (
      <Login {...userStore} {...userActionCreated}/>
    )
  }
}

export default connect(state => ({
  userStore: state.userStore
}), dispatch => ({
  userActionCreated: bindActionCreators(userActions, dispatch)
}))(LoginContainer)
