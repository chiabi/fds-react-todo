import React, { Component } from 'react'

import TodoPage from './pages/TodoPage'
import LoginPage from './pages/LoginPage'

export const PageContext = React.createContext()

export default class App extends Component {
  state = {
    page: 'login'
  }
  goToTodoPage = e => {
    this.setState({
      page: 'todo'
    })
  }
  render() {
    const {page} = this.state;
    const value = {
      goToTodoPage: this.goToTodoPage
    }
    return (
      <PageContext.Provider value={value}>
        <div className="App">
          {page === 'login' ? (
            <LoginPage/>
          ) : (
            <TodoPage/>
          )} 
        </div>
      </PageContext.Provider>
    )
  }
}