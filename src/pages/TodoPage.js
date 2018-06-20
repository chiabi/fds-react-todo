import React, { Component } from 'react'

import TodoContainer from '../containers/TodoContainer'
import {TodoProvider} from '../contexts/TodoContext'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'
import withAuth from '../hocs/withAuth';

class TodoPage extends Component {
  render() {
    return (
      <TodoProvider>
        <h1>{this.props.title}</h1>
        <TodoContainer/>
        <LogoutButtonContainer/>
      </TodoProvider>
    )
  }
}

export default withAuth(TodoPage)