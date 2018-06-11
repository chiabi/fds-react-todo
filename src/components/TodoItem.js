import React, { Component } from 'react';

export default class TodoItem extends Component {
  // 여기서는 UI를 어떻게 제공할 것인가 관련된 코드를 작성한다.
  handleBodyClick = e => {
    const newBody = prompt('새 내용을 입력하세요');
    const {id, onBodyUpdate} = this.props;
    onBodyUpdate(id, newBody)
  }
  render() {
    const {
      id, 
      body, 
      complete, 
      onComplete, 
      onDelete, 
    } = this.props;
    return (
      <li className={complete ? 'complete' : ''}>
        {/* JSX에서 주석처리하는 방법입니다. */}
        <span onClick={this.handleBodyClick}>{body}</span>
        <button onClick={e => onComplete(id)}>완료</button>
        <button onClick={e => onDelete(id)}>삭제</button>
      </li>
    )
  }
}