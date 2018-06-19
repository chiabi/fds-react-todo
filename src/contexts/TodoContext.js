import React, { Component } from 'react'

import todoAPI from '../todoAPI'

const { Provider, Consumer } = React.createContext();

class TodoProvider extends Component {
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
  }

  async componentDidMount() {
    await this.fetchTodos()
  }

  fetchTodos = async func => {
    if(func) await func()
    const res = await todoAPI.get('/todos')
    this.setState({
      todos: res.data,
      loading: false
    })
  }

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
    const value = {
      todos: this.state.todos,
      loading: this.state.loading,
      createTodo: this.createTodo,
      updateTodoBody: this.updateTodoBody,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo
    }
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export { TodoProvider, Consumer as TodoConsumer}