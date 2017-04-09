import React, { PropTypes } from 'react'

class LoginAuth extends React.Component {

  this._lock = new Auth0Lock(props.clientId, props.domain)

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      window.localStorage.setItem('auth0IdToken', authResult.idToken)
      this.props.router.replace(`/login`)
    })
  }
  
  _showLogin = () => {
    this._lock.show()
  }

  render () {
    return (
      <div>
        <span
          onClick={this._showLogin}
          className=''
        >
          Log in with Auth0
        </span>
      </div>
    )
  }
}

export default LoginAuth;
