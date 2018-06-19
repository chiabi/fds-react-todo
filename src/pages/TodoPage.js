import React, { Component } from 'react'

import TodoContainer from '../containers/TodoContainer'
import {TodoProvider} from '../contexts/TodoContext'
import LogoutButtonContainer from '../containers/LogoutButtonContainer'

export default class TodoPage extends Component {
  render() {
    return (
      <TodoProvider>
        <TodoContainer/>
        <LogoutButtonContainer/>
      </TodoProvider>
    )
  }
}
