import React, { Component } from 'react'

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

import {PageProvider, PageConsumer} from './contexts/PageContext'
import {UserProvider} from './contexts/UserContext'

export default class App extends Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <PageConsumer>
            {value => value.page === 'login' ? (
              <LoginPage/>
            ) : value.page === 'todo' ? (
              <TodoPage/>
            ) : null}
          </PageConsumer>
        </UserProvider>
      </PageProvider>
    )
  }
}