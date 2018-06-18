import React from 'react'

import LoginForm from '../components/LoginForm'
import {UserConsumer} from '../contexts/UserContext'
import {PageConsumer} from '../contexts/PageContext'

export default class LoginFormContainer extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({login}) => (
          <PageConsumer>
            {({goToTodoPage}) => (
              <LoginForm onLogin={async (username, password) => {
                 await login(username, password);
                 goToTodoPage();
              }}/>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    )
  }
}