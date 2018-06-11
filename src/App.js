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
    await this.fetchTodos()
  }

  fetchTodos = async func => {
    this.setState({
      loading: true
    })
    if(func) await func()
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

  handleButtonClick = async e => {
    if (this.state.newTodoBody) {
      await this.fetchTodos( async () => {
        const res = await todoAPI.post(`/todos`, {
          body: this.state.newTodoBody,
          complete: false
        })
      });
      this.setState({
        newTodoBody: ''
      })
    }
  }

  handleTodoItemComplete = async id => {
    await this.fetchTodos( async () => {
      await todoAPI.patch(`/todos/${id}`, {
        complete: true
      });
    });
  }

  handleTodoItemDelete = async id => {
    await this.fetchTodos( async () => {
      await todoAPI.delete(`/todos/${id}`)
    });
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
