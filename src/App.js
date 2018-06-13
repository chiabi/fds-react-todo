import React, { Component } from 'react'

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

import {PageProvider, PageConsumer} from './contexts/PageContext'
import {UserProvider} from './contexts/UserContext'

export default class App extends Component {
  render() {
    return (
      <PageProvider>
        {/* 
          엘리먼트도 값
          Provider 밑에 들어간 div 이하 자식들이 
          Provider의 `this.props.children`으로 들어간다.
        */}
        <PageConsumer>
          {value => (
            <UserProvider onLogin={value.goToTodoPage}>{
              value.page === 'login' ? (
                <LoginPage/>
              ) : (
                <TodoPage/>
              )}
            </UserProvider>
          )}
        </PageConsumer>
      </PageProvider>
    )
  }
}