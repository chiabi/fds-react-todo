import React from 'react'

import LoginForm from '../components/LoginForm'
import {PageContext} from '../App'

export default class Loginpage extends React.Component {
  render() {
    return (
      <PageContext.Consumer>
        {value => (
          <LoginForm onLogin={value.goToTodoPage}/>
        )}
      </PageContext.Consumer>
    )
  }
}