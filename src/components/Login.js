import React, { PropTypes, Component } from 'react'

export default class Login extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <form onSubmit={::this._handleLogin}>
       <input ref='user' type="text"/>
       <input ref='pass' type="password"/>
       <button>Ingresar</button>
      </form>
    )
  }

  _handleLogin(e){
    e.preventDefault()
    const user = this.refs.user.value
    const pass = this.refs.pass.value.trim()
    this.props.requestLogin(user, pass)
  }
}

Login.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
}