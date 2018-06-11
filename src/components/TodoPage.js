import React, { Component } from 'react';
import TodoList from './TodoList.js';

export default class TodoPage extends Component {
  render () {
    const {
      todos, 
      newTodoBody, 
      loading,
      handleInputChange,
      handleButtonClick,
      handleTodoItemComplete,
      handleTodoItemDelete,
      handleTodoItemBodyUpdate,
    } = this.props;
    return (
      <React.Fragment>
        <h1>할 일 목록</h1>
        <label>
          새 할일
          <input type="text" value={newTodoBody} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>추가</button>
        </label>
        {loading ? (
          <div>loading...</div>
        ) : (
          <TodoList 
            todos={todos}
            handleTodoItemComplete={handleTodoItemComplete}
            handleTodoItemDelete={handleTodoItemDelete}
            handleTodoItemBodyUpdate={handleTodoItemBodyUpdate}
          />
        )}
      </React.Fragment>
    )
  }
}
