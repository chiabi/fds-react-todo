import React, { Component } from 'react';
import TodoList from './components/TodoList.js';

let counter = 0;
class App extends Component {
  state = {
    todos: [
      {
        id: counter++,
        body: 'React 공부',
        complete: true,
      },
      {
        id: counter++,
        body: 'Redux 공부',
        complete: false,
      }
    ],
    newTodoBody: ''
  }

  // handle이라는 이름을 붙이는 것이 관례
  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value
    });
  }

  handleButtonClick = e => {
    if (this.state.newTodoBody) {
      const newTodo = {
        id: counter++,
        body: this.state.newTodoBody,
        complete: false
      }
      this.setState({
        todos: [
          ...this.state.todos,
          newTodo
        ],
        newTodoBody: ''
      })
    }
  }

  handleTodoItemComplete = id => {
    this.setState({
      todos: this.state.todos.map(t => {
        const newTodo = {
          ...t
        };
        if (t.id === id) {
          newTodo.complete = true;
        }
        return newTodo;
      })
    })
  }

  handleTodoItemDelete = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }

  render() {
    const {todos, newTodoBody} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        <TodoList 
          todos={todos}
          handleTodoItemComplete={this.handleTodoItemComplete}
          handleTodoItemDelete={this.handleTodoItemDelete}
        />
      </div>
    );
  }
}

export default App;
