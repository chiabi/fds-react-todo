import React, { Component } from 'react'
// 관례상 라이브러리 import는 위에
import axios from 'axios'

// 컴포넌트 import 아래에
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'

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
    if(func) await func()
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    })
  }

  // 메소드 이름: 영어동사 + 뭘 할 것인지
  createTodo = async newTodoBody => {
    if (newTodoBody) {
      const newTodo = {
        body: newTodoBody,
        complete: false
      }
      this.setState({
        loading: true
      })
      await todoAPI.post(`/todos`, newTodo)
      await this.fetchTodos()
    }
  }

  // [역할과 책임]
  // 여기서는 상태를 어떻게 업데이트 할 것인지에 관련된 코드를 작성한다.
  // 메소드 이름은 역할에 맞게 짓는다.
  updateTodoBody = async (id, body) => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`/todos/${id}`, {
      body
    })
    await this.fetchTodos()
  }

  completeTodo = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.patch(`/todos/${id}`, {
      complete: true
    })
    await this.fetchTodos()
  }

  deleteTodo = async id => {
    this.setState({
      loading: true
    })
    await todoAPI.delete(`/todos/${id}`)
    await this.fetchTodos()
  }

  render() {
    const {todos, loading} = this.state
    return (
      <div>
        <h1>할 일 목록</h1>
        <TodoForm onCreate={this.createTodo}/>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList 
            todos={todos}
            handleTodoItemComplete={this.completeTodo}
            handleTodoItemDelete={this.deleteTodo}
            handleTodoItemBodyUpdate={this.updateTodoBody}
          />
        )}
      </div>
    )
  }
}

export default App
