import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

import { TodoConsumer } from '../contexts/TodoContext';

export default class TodoContainer extends Component {
  render() {
    if(localStorage.getItem('token')) {
      return (
        <TodoConsumer>
          {({
            todos,
            loading,
            createTodo, 
            completeTodo,
            deleteTodo,
            updateTodoBody
          }) => (
            <div>
              <h1>할 일 목록</h1>
              <TodoForm onCreate={createTodo}/>
              {loading ? (
                <div>loading...</div>
              ) : (
                <TodoList 
                  todos={todos}
                  onTodoComplete={completeTodo}
                  onTodoDelete={deleteTodo}
                  onTodoBodyUpdate={updateTodoBody}
                />
              )}
            </div>
          )}
        </TodoConsumer>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}
