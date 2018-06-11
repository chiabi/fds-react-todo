import React, { Component } from 'react';
import axios from 'axios';
import TodoPage from './components/TodoPage.js';

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
class App extends Component {
  state = {
    page: 'login',
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

  goToTodoPage = () => {
    this.setState({
      page: 'todoPage'
    })
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
        await todoAPI.post(`/todos`, {
          body: this.state.newTodoBody,
          complete: false
        })
      });
      this.setState({
        newTodoBody: ''
      })
    }
  }

  // [역할과 책임]
  // 여기서는 상태를 어떻게 업데이트 할 것인지에 관련된 코드를 작성한다.
  handleTodoItemBodyUpdate = async (id, body) => {
    await this.fetchTodos( async () => {
      await todoAPI.patch(`/todos/${id}`, {
        body
      });
    })
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
    const {todos, newTodoBody, loading, page} = this.state;
    return (
      (page === 'login') ? (
        <div>
          <button onClick={this.goToTodoPage}>로그인</button>
        </div>
      ) : (
        <TodoPage
          todos={todos}
          newTodoBody={newTodoBody}
          loading={loading}
          handleInputChange={this.handleInputChange}
          handleButtonClick={this.handleButtonClick}
          handleTodoItemComplete={this.handleTodoItemComplete}
          handleTodoItemDelete={this.handleTodoItemDelete}
          handleTodoItemBodyUpdate={this.handleTodoItemBodyUpdate}
        />
      )
    );
  }
}

export default App;
