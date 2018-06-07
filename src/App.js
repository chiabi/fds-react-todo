import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        body: 'React 공부',
        complete: true,
      },
      {
        id: 2,
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
        id: this.state.todos.slice(-1)[0].id + 1,
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
        <ul>
          {
            todos.map(todo => {
              // 이부분은 라이브러리(classnames로 해결한다.)
              const className = todo.complete ? 'complete' : '';
              return (
                <li className={className} key={todo.id}>
                  {todo.body}
                  <button onClick={e => {
                    this.setState({
                      todos: todos.map(t => {
                        const newTodo = {
                          ...t
                        };
                        if (t.id === todo.id) {
                          newTodo.complete = true;
                        }
                        return newTodo;
                      })
                    })
                  }}>완료</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
