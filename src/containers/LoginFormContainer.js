import React from 'react'

import LoginForm from '../components/LoginForm'
import {UserConsumer} from '../contexts/UserContext'
import {PageConsumer} from '../contexts/PageContext'
import OnMount from '../components/OnMount'

export default class LoginFormContainer extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({login}) => (
          <PageConsumer>
            {({goToTodoPage}) => (
              // 반환할 때 하나로 둘러싸야하므로
              <React.Fragment>
                <LoginForm onLogin={async (username, password) => {
                  await login(username, password);
                  goToTodoPage();
                }}/>
                {localStorage.getItem('token') && <OnMount onMount={goToTodoPage} />}
              </React.Fragment>
            )}
          </PageConsumer>
        )}
      </UserConsumer>
    )
  }
}