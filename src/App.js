import React, { Component } from 'react'

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

import {PageProvider, PageConsumer} from './contexts/PageContext'
import {UserProvider} from './contexts/UserContext'
import {TodoProvider} from './contexts/TodoContext'

export default class App extends Component {
  render() {
    return (
      <PageProvider>
        <UserProvider>
          <TodoProvider>
            <PageConsumer>
              {value => value.page === 'login' ? (
                <LoginPage/>
              ) : (
                <TodoPage/>
              )}
            </PageConsumer>
          </TodoProvider>
        </UserProvider>
      </PageProvider>
    )
  }
}