import React, { Component, PropTypes } from 'react'

export default class Auth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onLoginClick, onLogoutClick, isAuthenticated, profile } = this.props

    return (
      <div style={{ marginTop: '10px' }}>
        { !isAuthenticated ? (
          <div></div>
        ) : (
          <ul className="list-inline">
            <li><img src={profile.picture} height="40px" /></li>
            <li><span>Hello, {profile.nickname}!</span></li>
            <li><button className="btn btn-primary" onClick={onLogoutClick}>Logout</button></li>
          </ul>
        )}
      </div>
    )
  }
}