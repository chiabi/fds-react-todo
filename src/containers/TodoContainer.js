import React, { Component } from 'react'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import { TodoConsumer } from '../contexts/TodoContext';

class TodoContainer extends Component {
  render() {
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
  }
}

export default TodoContainer