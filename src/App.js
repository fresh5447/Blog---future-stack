import React, {Component} from 'react'
import injectSheet from 'react-jss'

import NavBar from './NavBar'

import React, {PropTypes} from 'react';

class App extends React.Component {

  _isLoggedIn = () => {
    return this.props.data.user
  }

  _logout = () => {
    window.localStorage.removeItem('auth0IdToken')
    location.reload()
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}


const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(userQuery, { options: {forceFetch: true }})(withRouter(App))
