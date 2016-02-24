import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { userStore: { email } } = this.props

    return (
      <h1>bienvenido { email }</h1>
    )
  }
}

export default connect(state => ({
  userStore: state.userStore
}))(Dashboard)