import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList.js';

const todoAPI = axios.create({
  baseURL: 'https://todo-react-json.glitch.me'
})
class App extends Component {
  state = {
    loading: false,
    todos: [
      // {
      //   id: counter++,
      //   body: 'React 공부',
      //   complete: true,
      // },
      // {
      //   id: counter++,
      //   body: 'Redux 공부',
      //   complete: false,
      // }
    ],
    newTodoBody: ''
  }
  // 컴포넌트가 렌더되는 시점에(mount되면)
  // 라이프사이클 훅은 비동기함수건 그냥 함수건 잘 동작한다.
  async componentDidMount() {
    this.setState({
      loading: true
    })
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    });
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
        id: this.state.id,
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
    const {todos, newTodoBody, loading} = this.state;
    return (
      <div>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={this.handleInputChange} />
          <button onClick={this.handleButtonClick}>추가</button>
        </label>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList 
            todos={todos}
            handleTodoItemComplete={this.handleTodoItemComplete}
            handleTodoItemDelete={this.handleTodoItemDelete}
          />
        )}
      </div>
    );
  }
}

export default App;
