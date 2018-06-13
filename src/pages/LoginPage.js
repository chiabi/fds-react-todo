import React from 'react'

import LoginForm from '../components/LoginForm'
import {UserConsumer} from '../contexts/UserContext'

export default class Loginpage extends React.Component {
  render() {
    return (
      <UserConsumer>
        {value => (
          <LoginForm onLogin={value.login}/>
        )}
      </UserConsumer>
    )
  }
}